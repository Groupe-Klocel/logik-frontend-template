import {
    DeleteOutlined,
    EyeTwoTone,
    EditTwoTone,
    CheckCircleOutlined,
    CloseSquareOutlined
} from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable, ContentSpin, LinkButton } from '@components';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useEffect, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    orderByFormater,
    PaginationType,
    pathParams,
    useFeedbackOverwrites
} from '@helpers';

export const FeedbackOverwriteList = () => {
    const { t } = useTranslation();

    const [feedbackOverwrites, setFeedbackOverwrites] = useState<DataQueryType>();
    const [sort, setSort] = useState<any>(null);
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
                total: feedbackOverwrites?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, feedbackOverwrites]
    );

    const { isLoading, data, error } = useFeedbackOverwrites(
        undefined,
        pagination.current,
        pagination.itemsPerPage,
        sort
    );

    useEffect(() => {
        if (data) {
            setFeedbackOverwrites(data?.feedbackOverwrites);
            setPagination({
                ...pagination,
                total: data?.feedbackOverwrites?.count
            });
        }
    }, [data]);

    const handleTableChange = async (_pagination: any, _filter: any, sorter: any) => {
        await setSort(orderByFormater(sorter));
    };

    const columns = [
        {
            title: 'common:stockOwner',
            dataIndex: ['stockOwner', 'name'],
            key: ['stockOwner', 'name']
        },
        {
            title: 'd:movementCode',
            dataIndex: 'movementCodeText',
            key: 'movementCodeText'
        },
        {
            title: 'common:feedback',
            dataIndex: 'feedback',
            key: 'feedback',
            render: (text: any) =>
                text == true ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                )
        },
        {
            title: 'common:customValue',
            dataIndex: 'customValue',
            key: 'customValue'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: string }) => (
                <Space>
                    <LinkButton
                        icon={<EyeTwoTone />}
                        path={pathParams('/feedback-overwrite/[id]', record.id)}
                    />
                    <LinkButton
                        icon={<EditTwoTone />}
                        path={pathParams('/feedback-overwrite/edit/[id]', record.id)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id}`)}
                    />
                </Space>
            )
        }
    ];
    return (
        <>
            {feedbackOverwrites ? (
                <AppTable
                    type="feedbackOverwrite"
                    columns={columns}
                    data={feedbackOverwrites!.results}
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
