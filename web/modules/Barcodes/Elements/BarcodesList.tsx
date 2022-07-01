import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
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
import { BarcodeRenderModal } from './BarcodeRenderModal';

export type BarcodesListTypeProps = {
    searchCriteria?: any;
};

const BarcodesList = ({ searchCriteria }: BarcodesListTypeProps) => {
    const { t } = useTranslation();
    const [barcodes, setBarcodes] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [barcodeName, setBarcodeName] = useState('');
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

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

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const columns = [
        {
            title: 'd:stockOwner',
            dataIndex: 'stockOwner',
            key: 'stockOwner'
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: 'd:articleCode',
            dataIndex: 'articleCode',
            key: 'articleCode'
        },
        {
            title: 'd:articleName',
            dataIndex: 'articleName',
            key: 'articleName'
        },
        {
            title: 'd:supplierName',
            dataIndex: 'supplierName',
            key: 'supplierName'
        },
        {
            title: 'd:rotation',
            dataIndex: 'rotation',
            key: 'rotation',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        {
            title: 'd:preparationMode',
            dataIndex: 'preparationMode',
            key: 'preparationMode'
        },
        {
            title: 'd:articleLuLength',
            dataIndex: 'articleLuLength',
            key: 'articleLuLength'
        },
        {
            title: 'd:articleLuWidth',
            dataIndex: 'articleLuWidth',
            key: 'articleLuWidth'
        },
        {
            title: 'd:articleLuHeight',
            dataIndex: 'articleLuHeight',
            key: 'articleLuHeight'
        },
        {
            title: 'd:articleLuBaseUnitWeight',
            dataIndex: 'articleLuBaseUnitWeight',
            key: 'articleLuBaseUnitWeight'
        },
        {
            title: 'actions:actions',
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
            <BarcodeRenderModal
                visible={showModal}
                code={barcodeName}
                showhideModal={() => {
                    setShowModal(!showModal);
                }}
            />
        </>
    );
};

export { BarcodesList };
