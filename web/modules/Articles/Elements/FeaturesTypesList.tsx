import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { featureTypesData } from 'fake-data/features';
import { AppTable, ContentSpin } from '@components';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    showError,
    showSuccess,
    useFeatureTypes
} from '@helpers';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';

export const FeaturesTypesList = () => {
    const { t } = useTranslation();

    const [featureTypes, setFeatureTypes] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: featureTypes?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, featureTypes]
    );

    const { isLoading, data, error, refetch } = useFeatureTypes(
        // searchCriteria,
        undefined,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setFeatureTypes(data?.parameters); // set articles local state with new data
            setPagination({
                ...pagination,
                total: data?.parameters?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    // const { mutate, isLoading: deleteLoading } = useDeleteFeatureTypeMutation<Error>(
    //     graphqlRequestClient,
    //     {
    //         onSuccess: (
    //             data: DeleteFeatureTypeMutation,
    //             _variables: DeleteFeatureTypeMutationVariables,
    //             _context: unknown
    //         ) => {
    //             if (!deleteLoading) {
    //                 refetch();
    //                 showSuccess(t('messages:success-deleted'));
    //             }
    //         },
    //         onError: () => {
    //             showError(t('messages:error-deleting-data'));
    //         }
    //     }
    // );

    // const deleteFeatureType = ({ id }: DeleteFeatureTypeMutationVariables) => {
    //     Modal.confirm({
    //         title: t('messages:delete-confirm'),
    //         onOk: () => {
    //             mutate({ id });
    //         },
    //         okText: t('messages:confirm'),
    //         cancelText: t('messages:cancel')
    //     });
    // };

    const columns = [
        {
            title: 'd:code',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'd:value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Space>
                    <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
                    <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} `)}
                    />
                </Space>
            )
        }
    ];

    return (
        <>
            {featureTypes ? (
                <AppTable
                    type="featureTypes"
                    columns={columns}
                    data={featureTypes!.results}
                    pagination={pagination}
                    isLoading={isLoading}
                    setPagination={onChangePagination}
                    onChange={handleTableChange}
                />
            ) : (
                <ContentSpin />
            )}
        </>
    );
};
