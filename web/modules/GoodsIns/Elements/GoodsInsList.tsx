import { AppTable, LinkButton, ContentSpin } from '@components';
import { Space, Button } from 'antd';
import {
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    useGoodsIns,
    pathParams,
    DataQueryType,
    PaginationType,
    showInfo,
    showError,
    showSuccess,
    orderByFormater
} from '@helpers';
import { useAuth } from 'context/AuthContext';
import useTranslation from 'next-translate/useTranslation';
import {
    // ExportArticlesMutationVariables,
    // ExportArticlesMutation,
    // useExportArticlesMutation,
    // ExportFormat,
    Table,
    ModeEnum
} from 'generated/graphql';
import { EyeTwoTone, DeleteOutlined, PrinterOutlined } from '@ant-design/icons';
import { useState, useEffect, useCallback } from 'react';
import { useAppState } from 'context/AppContext';
import { useRouter } from 'next/router';

export interface IGoodsInsListProps {
    searchCriteria?: any;
}

const GoodsInsList = ({ searchCriteria }: IGoodsInsListProps) => {
    const { t } = useTranslation();
    const { graphqlRequestClient } = useAuth();

    const [goodsIns, setGoodsIns] = useState<DataQueryType>();

    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.GoodsIn;
        })?.mode;
    console.log('mode', mode);
    const router = useRouter();
    const {locale} = router;
    const { isLoading, data, error } = useGoodsIns(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort,
        locale!
    );

    // // EXPORT GOODSINS SECTION
    // const {
    //     mutate,
    //     isLoading: exportLoading,
    //     data: exportData
    // } = useExportGoodsInsMutation<Error>(graphqlRequestClient, {
    //     onSuccess: (
    //         data: ExportGoodsInsMutation,
    //         _variables: ExportGoodsInsMutationVariables,
    //         _context: any
    //     ) => {
    //         showSuccess(t('messages:success-exported'));
    //     },
    //     onError: () => {
    //         showError(t('messages:error-exporting-data'));
    //     }
    // });

    const exportGoodsIns = () => {
        // mutate({
        //     format: ExportFormat.Csv,
        //     compression: null,
        //     separator: ',',
        //     orderBy: sort,
        //     filters: searchCriteria
        // });
        alert('export goodsIns')
    };

    // useEffect(() => {
    //     if (exportLoading) {
    //         showInfo(t('messages:info-export-wip'));
    //     }
    // }, [exportLoading]);

    // END EXPORT

    const stickyActions = {
        export: {
            active: true,
            function: () => exportGoodsIns()
        }
    };

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: goodsIns?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, goodsIns]
    );

    // For pagination
    useEffect(() => {
        if (data) {
            setGoodsIns(data?.goodsIns);
            setPagination({
                ...pagination,
                total: data?.goodsIns?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    // to refactor to be automatique when fetching data
    const columns = [
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
            title: 'd:company',
            dataIndex: 'company',
            key: 'company',
            sorter: {
                multiple: 2
            },
            showSorterTooltip: false
        },
        {
            title: 'd:comment',
            dataIndex: 'comment',
            key: 'comment',
            sorter: {
                multiple: 3
            },
            showSorterTooltip: false
        },
        // {
        //     title: 'd:extras',
        //     dataIndex: 'extras',
        //     key: 'extras',
        //     sorter: {
        //         multiple: 4
        //     },
        //     showSorterTooltip: false
        // },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/goods-in/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<PrinterOutlined />}
                        path={pathParams('/goods-in/print/[id]', record.id)}
                    />
                    {!!mode && mode.toUpperCase() == ModeEnum.Write ? (
                        <Button
                            icon={<DeleteOutlined />}
                            danger
                            onClick={() => alert(`delete Goods In N° ${record.id}`)}
                        />
                    ) : (
                        <></>
                    )}
                </Space>
            )
        }
    ];

    return (
        <>
            {goodsIns ? (
                <AppTable
                    type="goodsIns"
                    columns={columns}
                    data={goodsIns!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    stickyActions={stickyActions}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};

export { GoodsInsList };
