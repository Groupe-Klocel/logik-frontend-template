import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { companiesData } from 'fake-data/companies';

export const StatusFeedbackOverwritesList = () => {
    const columns = [
        {
            title: 'common:stock-owner',
            dataIndex: 'stock-owner',
            key: 'stock-owner'
        },
        {
            title: 'common:object-type',
            dataIndex: 'object-type',
            key: 'object-type'
        },
        {
            title: 'common:status-code',
            dataIndex: 'status-code',
            key: 'status-code'
        },
        {
            title: 'common:feedback',
            dataIndex: 'feedback',
            key: 'feedback'
        },
        {
            title: 'common:custom-value',
            dataIndex: 'custom-value',
            key: 'custom-value'
        },
        {
            title: 'common:system',
            dataIndex: 'system',
            key: 'system'
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
    return <AppTable type="status-feedback-overwrites" columns={columns} data={companiesData} />;
};
