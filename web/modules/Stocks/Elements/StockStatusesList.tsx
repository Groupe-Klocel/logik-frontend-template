import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { stockData } from 'fake-data/stock';
import { FC } from 'react';

export interface IStockStatusesListProps {}

export const StockStatusesList: FC<IStockStatusesListProps> = ({}) => {
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'system',
            dataIndex: 'system',
            key: 'system'
        },
        {
            title: 'comment',
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
    return (
        <AppTable type="stock-statuses" columns={columns} scroll={{ x: 800 }} data={stockData} />
    );
};
