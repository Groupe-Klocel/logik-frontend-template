import {
    CheckCircleOutlined,
    CloseSquareOutlined,
    EyeTwoTone,
    PrinterOutlined
} from '@ant-design/icons';
import { AppTable, ContentSpin, LinkButton } from '@components';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    useBarcodes
} from '@helpers';
import { Button, Space } from 'antd';

import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

export type BarcodesListTypeProps = {
    searchCriteria?: any;
};

const BarcodesList = ({ searchCriteria }: BarcodesListTypeProps) => {
    const { t } = useTranslation();
    const stockOwner = t('d:stockOwner');
    const barcode = t('common:barcode');
    const articleCode = t('d:articleCode');
    const articleName = t('d:articleName');
    const supplierName = t('d:supplierName');
    const rotation = t('d:rotation');
    const preparationMode = t('d:preparationMode');
    const articleLuLength = t('d:articleLuLength');
    const articleLuWidth = t('d:articleLuWidth');
    const articleLuHeight = t('d:articleLuHeight');
    const articleLuBaseUnitWeight = t('d:articleLuBaseUnitWeight');
    const blackListed = t('d:blackListed');
    const actions = t('actions:actions');
    const [barcodes, setBarcodes] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [barcodeName, setBarcodeName] = useState('');
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const [articlesLuBarcodes, setArticlesLuBarcodes] = useState<any>();

    // const articlesLuBarcodes = useGetArticleLuBarcodeByBarcodeIdQuery<Partial<GetArticleLuBarcodeByBarcodeIdQuery>, Error>(
    //     graphqlRequestClient,
    //     {
    //         id:
    //     }
    // );

    // useEffect(() => {
    //     if (articlesLuBarcodes) {
    //         setArticlesLuBarcode(articlesLuBarcodes?.data?.listParametersForAScope);
    //     }
    // }, [articlesLuBarcodes]);

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: barcodes?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, barcodes]
    );

    const { isLoading, data, error, refetch } = useBarcodes(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setBarcodes(data?.barcodes);
            setPagination({
                ...pagination,
                total: data?.barcodes?.count
            });
        }
    }, [data]);

    // For pagination
    // useEffect(() => {
    //     if (data) {
    //         setArticlesLuBarcodes(articlesLuBarcodes?.results?.map?.articles);
    //         setPagination({
    //             ...pagination,
    //             total: data?.barcodes?.count
    //         });
    //     }
    // }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };
    console.log(data);
    const columns = [
        {
            title: stockOwner,
            dataIndex: ['stockOwner', 'name'],
            key: ['stockOwner', 'name']
        },
        {
            title: barcode,
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: articleCode,
            dataIndex: ['article', 'code'],
            key: ['article', 'code']
        },
        {
            title: articleName,
            dataIndex: ['article', 'name'],
            key: ['article', 'name']
        },
        {
            title: supplierName,
            dataIndex: ['article', 'supplierName'],
            key: ['article', 'supplierName']
        },
        {
            title: rotation,
            dataIndex: 'rotationText',
            key: 'rotationText',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: preparationMode,
            dataIndex: 'preparationModeText',
            key: 'preparationModeText'
        },
        {
            title: articleLuLength,
            dataIndex: ['article', 'articleLuLength'],
            key: ['article', 'articleLuLength']
        },
        {
            title: articleLuWidth,
            dataIndex: 'articleLuWidth',
            key: 'articleLuWidth'
        },
        {
            title: articleLuHeight,
            dataIndex: 'articleLuHeight',
            key: 'articleLuHeight'
        },
        {
            title: articleLuBaseUnitWeight,
            dataIndex: 'articleLuBaseUnitWeight',
            key: 'articleLuBaseUnitWeight'
        },
        {
            title: blackListed,
            dataIndex: 'blackListed',
            key: 'blackListed',
            render: (blackListed: Text) => {
                return blackListed ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: actions,
            key: 'actions',
            render: (record: { id: string; name: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/barcode/[id]', record.id)}
                    />
                    <Button
                        icon={<PrinterOutlined />}
                        onClick={() => {
                            setBarcodeName(record.name);
                            setShowModal(true);
                        }}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {barcodes ? (
                <AppTable
                    type="barcodes"
                    columns={columns}
                    data={barcodes!.results}
                    isLoading={isLoading}
                    pagination={pagination}
                    setPagination={onChangePagination}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { BarcodesList };
