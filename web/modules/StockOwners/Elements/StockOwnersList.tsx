import { DeleteOutlined, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
import { AppTable, ContentSpin, LinkButton } from '@components';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    showError,
    showSuccess,
    useStockOwners
} from '@helpers';
import { Button, Modal, Space } from 'antd';
import {
    GetStockOwnersStatusesConfigsQuery,
    SoftDeleteStockOwnerMutation,
    SoftDeleteStockOwnerMutationVariables,
    useGetStockOwnersStatusesConfigsQuery,
    useSoftDeleteStockOwnerMutation
} from 'generated/graphql';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';

export type StockOwnersListTypeProps = {
    searchCriteria?: any;
};

const StockOwnersList = ({ searchCriteria }: StockOwnersListTypeProps) => {
    const { t } = useTranslation();
    const name = t('d:name');
    const address1 = t('common:address1');
    const postalCode = t('common:postalCode');
    const city = t('common:city');
    const country = t('common:country');
    const status = t('d:status');
    const logo = t('d:logoUrl');
    const awsAccessKeyId = t('d:awsAccessKeyId');
    const awsSecretAccessKey = t('d:awsSecretAccessKey');
    const s3ExchangeDir = t('d:s3ExchangeDir');
    const exchangePrefix = t('d:exchangePrefix');
    const contactName = t('d:contactName');
    const address2 = t('d:address2');
    const address3 = t('d:address3');
    const countryCode = t('d:countryCode');
    const phone = t('d:phone');
    const mobile = t('d:mobile');
    const email = t('d:email');
    const senderName = t('d:senderName');
    const senderContact = t('d:senderContact');
    const senderAddress1 = t('d:senderAddress1');
    const senderAddress2 = t('d:senderAddress2');
    const senderAddress3 = t('d:senderAddress3');
    const senderPostCode = t('d:senderPostCode');
    const senderCity = t('d:senderCity');
    const senderCountry = t('d:senderCountry');
    const senderCountryCode = t('d:senderCountryCode');
    const senderPhone = t('d:senderPhone');
    const senderMobile = t('d:senderMobile');
    const senderEmail = t('d:senderEmail');
    const succesDetetionMessage = t('messages:success-deleted');
    const errorDeletionMessage = t('messages:error-deleting-data');
    const confirmationMessage = t('messages:confirm');
    const confirmDeletionMessage = t('messages:delete-confirm');
    const cancelledMessage = t('messages:cancel');
    const actions = t('actions:actions');

    const [stockOwners, setStockOwners] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });

    const [stockOwnerStatuses, setStockOwnerStatuses] = useState<any>();

    //To render stock owners statuses from config table for the given scope
    const stockOwnerStatusesList = useGetStockOwnersStatusesConfigsQuery<
        Partial<GetStockOwnersStatusesConfigsQuery>,
        Error
    >(graphqlRequestClient);

    useEffect(() => {
        if (stockOwnerStatusesList) {
            setStockOwnerStatuses(stockOwnerStatusesList?.data?.listConfigsForAScope);
        }
    }, [stockOwnerStatusesList]);

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: stockOwners?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, stockOwners]
    );

    const { isLoading, data, error, refetch } = useStockOwners(
        searchCriteria,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setStockOwners(data?.stockOwners); // set stockOwners local state with new data
            setPagination({
                ...pagination,
                total: data?.stockOwners?.count // may change total items
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };
    //console.log('JND', stockOwners);
    const { mutate, isLoading: softDeleteLoading } = useSoftDeleteStockOwnerMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: SoftDeleteStockOwnerMutation,
                _variables: SoftDeleteStockOwnerMutationVariables,
                _context: any
            ) => {
                if (!softDeleteLoading) {
                    refetch;
                    showSuccess(succesDetetionMessage);
                }
            },
            onError: () => {
                showError(errorDeletionMessage);
            }
        }
    );

    const softDeleteStockOwner = ({ stockOwnerId }: SoftDeleteStockOwnerMutationVariables) => {
        Modal.confirm({
            title: confirmDeletionMessage,
            onOk: () => {
                mutate({ stockOwnerId });
            },
            okText: confirmationMessage,
            cancelText: cancelledMessage
        });
    };

    const columns = [
        {
            title: name,
            dataIndex: 'name',
            key: 'name',
            sorter: {
                multiple: 1
            },
            showSorterTooltip: false
        },
        {
            title: address1,
            dataIndex: 'address1',
            key: 'address1'
        },
        {
            title: postalCode,
            dataIndex: 'postCode',
            key: 'postCode'
        },
        {
            title: city,
            dataIndex: 'city',
            key: 'city'
        },
        {
            title: country,
            dataIndex: 'country',
            key: 'country'
        },
        {
            title: logo,
            dataIndex: 'logoUrl',
            key: 'logoUrl'
        },
        {
            title: awsAccessKeyId,
            dataIndex: 'awsAccessKeyId',
            key: 'awsAccessKeyId'
        },
        {
            title: awsSecretAccessKey,
            dataIndex: 'awsSecretAccessKey',
            key: 'awsSecretAccessKey'
        },
        {
            title: s3ExchangeDir,
            dataIndex: 's3ExchangeDir',
            key: 's3ExchangeDir'
        },
        {
            title: exchangePrefix,
            dataIndex: 'exchangePrefix',
            key: 'exchangePrefix'
        },
        {
            title: contactName,
            dataIndex: 'contactName',
            key: 'contactName'
        },
        {
            title: address2,
            dataIndex: 'address2',
            key: 'address2'
        },
        {
            title: address3,
            dataIndex: 'address3',
            key: 'address3'
        },
        {
            title: countryCode,
            dataIndex: 'countryCode',
            key: 'countryCode'
        },
        {
            title: phone,
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: mobile,
            dataIndex: 'mobile',
            key: 'mobile'
        },
        {
            title: email,
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: senderName,
            dataIndex: 'senderName',
            key: 'senderName'
        },
        {
            title: senderContact,
            dataIndex: 'senderContact',
            key: 'senderContact'
        },
        {
            title: senderAddress1,
            dataIndex: 'senderAddress1',
            key: 'senderAddress1'
        },
        {
            title: senderAddress2,
            dataIndex: 'senderAddress2',
            key: 'senderAddress2'
        },
        {
            title: senderAddress3,
            dataIndex: 'senderAddress3',
            key: 'senderAddress3'
        },
        {
            title: senderPostCode,
            dataIndex: 'senderPostCode',
            key: 'senderPostCode'
        },
        {
            title: senderCity,
            dataIndex: 'senderCity',
            key: 'senderCity'
        },
        {
            title: senderCountry,
            dataIndex: 'senderCountry',
            key: 'senderCountry'
        },
        {
            title: senderCountryCode,
            dataIndex: 'senderCountryCode',
            key: 'senderCountryCode'
        },
        {
            title: senderPhone,
            dataIndex: 'senderPhone',
            key: 'senderPhone'
        },
        {
            title: senderMobile,
            dataIndex: 'senderMobile',
            key: 'senderMobile'
        },
        {
            title: senderEmail,
            dataIndex: 'senderEmail',
            key: 'senderEmail'
        },
        {
            title: status,
            dataIndex: 'status',
            key: 'status',
            render: (status: any) =>
                status ? stockOwnerStatuses.find((e: any) => e.code == status).text : 'N/A'
        },
        {
            title: actions,
            key: 'actions',
            render: (record: { id: string; name: string; status: number }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/stock-owner/[id]', record.id)}
                    />
                    {/* {record.status != 1005 ? (
                        <>
                            <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/stock-owner/edit/[id]', record.id)}
                            />
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                disabled
                                onClick={() => softDeleteStockOwner({ stockOwnerId: record.id })}
                            />
                        </>
                    ) : (
                        <></>
                    )} */}
                </Space>
            )
        }
    ];
    return (
        <>
            {stockOwners ? (
                <AppTable
                    type="stockOwners"
                    columns={columns}
                    data={stockOwners!.results}
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
export { StockOwnersList };
