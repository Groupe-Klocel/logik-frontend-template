import { FC } from 'react';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { blocsData } from 'fake-data/blocs';
import { AppTable } from '@components';

export interface IBlocsListProps {}

export const BlocsList: FC<IBlocsListProps> = ({}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Moveable',
            dataIndex: 'moveable',
            key: 'moveable'
        },
        {
            title: 'Masse',
            dataIndex: 'masse',
            key: 'masse'
        },
        {
            title: 'Comment',
            dataIndex: 'comment',
            key: 'comment'
        },
        {
            title: 'Warehouse Code',
            dataIndex: 'warehouse-code',
            key: 'warehouse-code'
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
    return <AppTable type="blocs" columns={columns} scroll={{ x: 800 }} data={blocsData} />;
};
