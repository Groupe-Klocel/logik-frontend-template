import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { companiesData } from 'fake-data/companies';
import useTranslation from 'next-translate/useTranslation';
import { useCallback, useState } from 'react';
import {
    DataQueryType,
    DEFAULT_ITEMS_PER_PAGE,
    DEFAULT_PAGE_NUMBER,
    PaginationType
} from '@helpers';

export const FeedbackOverwriteList = () => {
    const { t } = useTranslation();

    const [feedbackOverwrite, setFeedbackOverwrite] = useState<DataQueryType>();
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
                total: feedbackOverwrite?.count,
                current: currentPage,
                itemsPerPage: itemsPerPage
            });
        },
        [setPagination, feedbackOverwrite]
    );

    const columns = [
        {
            title: 'common:stockOwner',
            dataIndex: 'stockOwner',
            key: 'stockOwner'
        },
        {
            title: 'd:movementCode',
            dataIndex: 'movementCode',
            key: 'movementCode'
        },
        {
            title: 'common:feedback',
            dataIndex: 'feedback',
            key: 'feedback'
        },
        {
            title: 'common:customValue',
            dataIndex: 'customValue',
            key: 'customValue'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number; account: string }) => (
                <Space>
                    <Button
                        icon={<EyeTwoTone />}
                        onClick={() => alert(`View ${record.id} - ${record.account}`)}
                    />
                    <Button
                        icon={<EditTwoTone />}
                        onClick={() => alert(`Edit ${record.id} - ${record.account}`)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} - ${record.account}`)}
                    />
                </Space>
            )
        }
    ];
    return <AppTable type="movements-config" columns={columns} data={companiesData} />;
};
