import { DeleteOutlined, EditTwoTone, EyeTwoTone } from '@ant-design/icons';
import { AppTable, ContentSpin, DetailsList, LinkButton } from '@components';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    PaginationType,
    pathParams,
    showError,
    showSuccess,
    useArticleSetDetails
} from '@helpers';
import { Button, Col, Divider, Modal, Row, Space, Typography } from 'antd';
import { useAppState } from 'context/AppContext';
import {
    DeleteArticleSetDetailMutation,
    DeleteArticleSetDetailMutationVariables,
    Table,
    useDeleteArticleSetDetailMutation
} from 'generated/graphql';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import graphqlRequestClient from 'graphql/graphqlRequestClient';

const { Title } = Typography;

export interface IArticleSetDetailsProps {
    details?: any;
}

const ArticleSetDetails = ({ details }: IArticleSetDetailsProps) => {
    const { t } = useTranslation();

    const refurbDetails = {
        ...details,
        associatedStockOwner: details.stockOwner.name,
        associatedArticle: details.article.name,
        articleDescription: details.article.additionalDescription
    };
    delete refurbDetails['id'];
    delete refurbDetails['articleId'];
    delete refurbDetails['stockOwnerId'];
    delete refurbDetails['stockOwner'];
    delete refurbDetails['extras'];

    //ArticleSetDetails list
    const [articleSetDetails, setArticleSetDetails] = useState<DataQueryType>();

    const [pagination, setPagination] = useState<PaginationType>({
        total: undefined,
        current: DEFAULT_PAGE_NUMBER,
        itemsPerPage: DEFAULT_ITEMS_PER_PAGE
    });
    const { permissions } = useAppState();
    const mode =
        !!permissions &&
        permissions.find((p: any) => {
            return p.table.toUpperCase() == Table.ArticleSetDetail;
        })?.mode;

    // make wrapper function to give child
    const onChangePagination = useCallback(
        (currentPage, itemsPerPage) => {
            // Re fetch data for new current page or items per page
            setPagination({
                total: articleSetDetails?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, articleSetDetails]
    );

    const { isLoading, data, error, refetch } = useArticleSetDetails(
        { articleSetId: details.id },
        pagination.current,
        pagination.itemsPerPage,
        null
    );

    useEffect(() => {
        if (data) {
            setArticleSetDetails(data?.articleSetDetails);
            setPagination({
                ...pagination,
                total: data?.articleSetDetails?.count
            });
        }
    }, [data]);

    const { mutate, isLoading: deleteLoading } = useDeleteArticleSetDetailMutation<Error>(
        graphqlRequestClient,
        {
            onSuccess: (
                data: DeleteArticleSetDetailMutation,
                _variables: DeleteArticleSetDetailMutationVariables,
                _context: unknown
            ) => {
                if (!deleteLoading) {
                    refetch();
                    showSuccess(t('messages:success-deleted'));
                }
            },
            onError: () => {
                showError(t('messages:error-deleting-data'));
            }
        }
    );

    const deleteArticleSetDetail = ({ id }: DeleteArticleSetDetailMutationVariables) => {
        Modal.confirm({
            title: t('messages:delete-confirm'),
            onOk: () => {
                mutate({ id });
            },
            okText: t('messages:confirm'),
            cancelText: t('messages:cancel')
        });
    };

    const articleSetDetailsColumns = [
        {
            title: t('common:stockOwner'),
            dataIndex: ['stockOwner', 'name'],
            key: ['stockOwner', 'name']
        },
        {
            title: t('common:article'),
            dataIndex: ['article', 'name'],
            key: ['article', 'name']
        },
        {
            title: 'd:quantity',
            dataIndex: 'quantity',
            key: 'quantity'
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
                                path={pathParams('/set/detail/[id]', record.id)}
                            />
                            <LinkButton
                                icon={<EditTwoTone />}
                                path={pathParams('/set/detail/edit/[id]', record.id)}
                            />
                            <Button
                                icon={<DeleteOutlined />}
                                danger
                                loading={deleteLoading}
                                onClick={() => deleteArticleSetDetail({ id: record.id })}
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
                        {t('common:associated', { name: t('menu:article-set-details') })} (
                        {articleSetDetails?.count})
                    </Title>
                </Col>
                <Col span={6}>
                    <LinkButton
                        title={t('actions:add2', { name: t('menu:article-set-detail') })}
                        path={pathParams('/add-set-detail', details.id)}
                        type="primary"
                    />
                </Col>
            </Row>
            {articleSetDetails ? (
                <AppTable
                    type="associatedArticleSetDetails"
                    columns={articleSetDetailsColumns}
                    data={articleSetDetails!.results}
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

export { ArticleSetDetails };
