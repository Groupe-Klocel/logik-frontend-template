import { EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { stockData } from 'fake-data/stock';

export const StockStatusesList = () => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'd:system',
            dataIndex: 'system',
            key: 'system'
        },
        {
            title: 'd:comment',
            dataIndex: 'comment',
            key: 'comment'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Space>
                    <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
                    <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
                </Space>
            )
        }
    ];
    return <AppTable type="stock-statuses" columns={columns} data={stockData} />;
};
