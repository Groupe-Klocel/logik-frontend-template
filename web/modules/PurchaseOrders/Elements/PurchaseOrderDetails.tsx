import { AppTable, ContentSpin, DetailsList, LinkButton } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { Button, Divider, Space, Typography } from 'antd';
import { DataQueryType, DEFAULT_ITEMS_PER_PAGE, DEFAULT_PAGE_NUMBER, PaginationType, pathParams, useMovements, usePurchaseOrderLines, useStatusEvolutions } from '@helpers';
import { useCallback, useEffect, useState } from 'react';
import { useAppState } from 'context/AppContext';
import { Table } from 'generated/graphql';
import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';

const { Title } = Typography;

export interface IPurchaseOrderDetailsProps {
    details?: any;
    getPOLineNumber: (num: number | undefined) => void
}

const PurchaseOrderDetails = ({ details, getPOLineNumber }: IPurchaseOrderDetailsProps) => {
    const { t } = useTranslation();
    const { permissions } = useAppState();
    const modePOLine =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.PurchaseOrderLine;
        })?.mode;

    const [purchaseOrderLines, setPurchaseOrderLines] = useState<DataQueryType>();
    
    const [poLinePagination, setPoLinePagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const poLines = usePurchaseOrderLines(
        { purchaseOrderId: details.id },
        poLinePagination.current,
        poLinePagination.itemsPerPage,
        null
    );

    // make wrapper function to give child
    const onChangePOLinePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPoLinePagination({
                total: purchaseOrderLines?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPoLinePagination, purchaseOrderLines]
    );

    // Remove barcodes from all other details
    const purchaseOrderLineColumns = [
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'd:articleId',
            dataIndex: 'articleId',
            key: 'articleId'
        },
        {
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'd:quantity',
            dataIndex: 'quantity',
            key: 'quantity'
        },
        {
            title: 'd:quantityMax',
            dataIndex: 'quantityMax',
            key: 'quantityMax'
        },
        {
            title: 'd:receivedQuantity',
            dataIndex: 'receivedQuantity',
            key: 'receivedQuantity'
        },
        {
            title: 'd:reservedQuantity',
            dataIndex: 'reservedQuantity',
            key: 'reservedQuantity'
        },
        {
            title: 'd:originalLine',
            dataIndex: 'originalPurchaseOrderLine',
            key: 'originalPurchaseOrderLine'
        },
        {
            title: 'd:blockingStatus',
            dataIndex: 'blockingStatus',
            key: 'blockingStatus'
        },
        {
            title: 'd:reservation',
            dataIndex: 'reservation',
            key: 'reservation'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    {modePOLine == null ? (
                        <></>
                    ) : (
                        <>
                            <LinkButton
                                icon={<EyeTwoTone />}
                                path={pathParams('/purchase-order-lines/[id]', record.id)}
                            />
                            <Button
                                icon={<PrinterOutlined />}
                                onClick={() => {
                                }}
                            />
                        </>
                    )}
                </Space>
            )
        }
    ];

    // For pagination
    useEffect(() => {
        if (poLines.data) {
            setPurchaseOrderLines(poLines.data?.purchaseOrderLines);
            setPoLinePagination({
                ...poLinePagination,
                total: poLines.data?.purchaseOrderLines?.count
            });
            getPOLineNumber(poLines.data.purchaseOrderLines?.count);
        }
    }, [poLines.data]);


    const modeMovement =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.Movement;
        })?.mode;
    
    const [movements, setMovements] = useState<DataQueryType>();
    
    const [movementPagination, setMovementPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const movementsData = useMovements(
        { purchaseOrderId: details.id },
        movementPagination.current,
        movementPagination.itemsPerPage,
        null
    );

    // make wrapper function to give child
    const onChangeMovementPagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setMovementPagination({
                total: movements?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setMovementPagination, movements]
    );

    // Remove barcodes from all other details
    const movementsColumns = [
        {
            title: 'd:id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'd:articleId',
            dataIndex: 'articleId',
            key: 'articleId'
        },
        {
            title: 'd:location',
            dataIndex: 'location',
            key: 'location'
        },
        {
            title: 'd:contentId',
            dataIndex: 'contentId',
            key: 'contentId'
        },
        {
            title: 'd:receptionDate',
            dataIndex: 'receptionDate',
            key: 'receptionDate'
        },
        {
            title: 'd:restoreCode',
            dataIndex: 'restoreCode',
            key: 'restoreCode'
        },
        {
            title: 'd:actionCode',
            dataIndex: 'actionCode',
            key: 'actionCode'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    {modeMovement == null ? (
                        <></>
                    ) : (
                        <>
                            <LinkButton
                                icon={<EyeTwoTone />}
                                path={pathParams('/movements/[id]', record.id)}
                            />
                            <Button
                                icon={<PrinterOutlined />}
                                onClick={() => {
                                    // setBarcodeName(record.name);
                                    // setShowModal(true);
                                }}
                            />
                        </>
                    )}
                </Space>
            )
        }
    ];

    // For pagination
    useEffect(() => {
        if (movementsData.data) {
            setMovements(movementsData.data?.movements);
            setMovementPagination({
                ...movementPagination,
                total: movementsData.data?.movements?.count
            });
        }
    }, [movementsData.data]);


    // Status Evolustions part
    const modeStatusEvolution =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.StatusEvolution;
        })?.mode;

    const [statusEvolutions, setStatusEvolutions] = useState<DataQueryType>();
    
    const [statusEvolutionsPagination, setStatusEvolutionsPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const statusEvolutionsData = useStatusEvolutions(
        { objectReference: details.id, object: 19010 },
        statusEvolutionsPagination.current,
        statusEvolutionsPagination.itemsPerPage,
        null
    );

    // make wrapper function to give child
    const onChangeStatusEvolutionsPagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setStatusEvolutionsPagination({
                total: statusEvolutions?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setStatusEvolutionsPagination, statusEvolutionsPagination]
    );

    // Remove barcodes from all other details
    const statusEvolutionsColumns = [
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'd:date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'd:user',
            dataIndex: 'user',
            key: 'user'
        },
        {
            title: 'd:feedback',
            dataIndex: 'feedback',
            key: 'feedback'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <>
                        <LinkButton
                            icon={<EyeTwoTone />}
                            path={pathParams('/statusEvolutions/[id]', record.id)}
                        />
                        <Button
                            icon={<PrinterOutlined />}
                            onClick={() => {
                                // setBarcodeName(record.name);
                                // setShowModal(true);
                            }}
                        />
                    </>
                </Space>
            )
        }
    ];

    // For pagination
    useEffect(() => {
        if (statusEvolutionsData.data) {
            setStatusEvolutions(statusEvolutionsData.data?.statusEvolutions);
            setStatusEvolutionsPagination({
                ...statusEvolutionsPagination,
                total: statusEvolutionsData.data?.statusEvolutions?.count
            });
        }
    }, [statusEvolutionsData.data]);

    return (
        <>
            <DetailsList details={details} />
            {modeMovement == null ? (
                <></>
            ) : (
                <>
                    <Divider />
                    <Title level={4}>{t('common:associated', { name: t('common:purchase-order-lines') })}</Title>
                    <LinkButton
                        title={t('actions:add2', {name: t("common:purchase-order-line")})}
                        path={`/purchase-order-lines/add?poid=${details.id}`}
                        type="primary"
                    />
                    {purchaseOrderLines ? (
                        <AppTable
                            type="associatedPurchaseOrderLines"
                            columns={purchaseOrderLineColumns}
                            data={purchaseOrderLines!.results}
                            pagination={poLinePagination}
                            isLoading={poLines.isLoading}
                            setPagination={onChangePOLinePagination}
                            filter={false}
                        />
                    ) : (
                        <ContentSpin />
                    )}
                
                </>
            )}
           {modeMovement == null ? (
                <></>
            ) : (
                <>
                    <Divider />
                    <Title level={4}>{t('common:associated', { name: t('common:movements') })}</Title>
                    {movements ? (
                        <AppTable
                            type="associatedMovements"
                            columns={movementsColumns}
                            data={movements!.results}
                            pagination={movementPagination}
                            isLoading={movementsData.isLoading}
                            setPagination={onChangeMovementPagination}
                            filter={false}
                        />
                    ) : (
                        <ContentSpin />
                    )}
                </>
            )}

            {modeStatusEvolution == null ? (
                <></>
            ) : (
                <>
                    <Divider />
                    <Title level={4}>{t('common:associated', { name: t('common:status-evolutions') })}</Title>
                    {statusEvolutions ? (
                        <AppTable
                            type="associatedPurchaseOrderLines"
                            columns={statusEvolutionsColumns}
                            data={statusEvolutions!.results}
                            pagination={statusEvolutionsPagination}
                            isLoading={statusEvolutionsData.isLoading}
                            setPagination={onChangeStatusEvolutionsPagination}
                            filter={false}
                        />
                    ) : (
                        <ContentSpin />
                    )}
                </>
            )}
            
        </>
    );
};

export { PurchaseOrderDetails };
