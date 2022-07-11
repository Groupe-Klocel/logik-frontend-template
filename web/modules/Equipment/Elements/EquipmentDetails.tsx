import { EyeTwoTone } from '@ant-design/icons';
import { AppTable, ContentSpin, DetailsList, LinkButton } from '@components';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    PaginationType,
    pathParams,
    useEquipmentDetails
} from '@helpers';
import { Col, Divider, Row, Space, Typography } from 'antd';
import { useAppState } from 'context/AppContext';
import { Table } from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

const { Title } = Typography;

export interface IEquipmentDetailsProps {
    details?: any;
}

const EquipmentDetails = ({ details }: IEquipmentDetailsProps) => {
    const { t } = useTranslation();

    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name
    };
    delete refurbDetails['stockOwner'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['id'];
    delete refurbDetails['type'];
    delete refurbDetails['status'];
    delete refurbDetails['limitType'];
    delete refurbDetails['extras'];
    if (details.limitType === 20530) {
        delete refurbDetails['nbMaxBox'];
    } else {
        delete refurbDetails['height'];
        delete refurbDetails['width'];
        delete refurbDetails['length'];
        delete refurbDetails['toleranceDimension'];
    }

    //EquipmentsDetails list
    const [equipmentDetails, setEquipmentDetails] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.EquipmentDetail;
        })?.mode;

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: equipmentDetails?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, equipmentDetails]
    );

    const { isLoading, data, error } = useEquipmentDetails(
        { equipmentId: details.id },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

    useEffect(() => {
        if (data) {
            setEquipmentDetails(data?.equipmentDetails);
            setPagination({
                ...pagination,
                total: data?.equipmentDetails?.count
            });
        }
    }, [data]);

    const equipmentDetailsColumns = [
        {
            title: 'd:packaging',
            dataIndex: ['packaging', 'name'],
            key: ['packaging', 'name']
        },
        {
            title: 'd:preparationMode',
            dataIndex: 'preparationModeText',
            key: 'preparationModeText'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    {mode == null ? (
                        <></>
                    ) : (
                        <>
                            <LinkButton
                                icon={<EyeTwoTone />}
                                path={pathParams('/equipment/detail/[id]', record.id)}
                            />
                        </>
                    )}
                </Space>
            )
        }
    ];
    return (
        <>
            <DetailsList details={refurbDetails} />
            <Divider />
            <Row justify="space-between">
                <Col span={6}>
                    <Title level={4}>
                        {t('common:associated', { name: t('common:equipment-details') })} (
                        {equipmentDetails?.count})
                    </Title>
                </Col>
                <Col span={6}>
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:equipment-detail') })}
                        // path="/add-equipment-detail"
                        path={pathParams('/add-equipment-detail', details.id)}
                        type="primary"
                    />
                </Col>
            </Row>
            {equipmentDetails ? (
                <AppTable
                    type="associatedEquipmentDetails"
                    columns={equipmentDetailsColumns}
                    data={equipmentDetails!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    filter={false}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { EquipmentDetails };
