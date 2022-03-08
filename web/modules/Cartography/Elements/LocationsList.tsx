import { Button, Space } from 'antd';
import { locationsData } from 'fake-data/locations';
import { AppTable } from '@components';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';


export const LocationsList = ()  => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:bloc',
            dataIndex: 'bloc',
            key: 'bloc'
        },
        {
            title: 'd:aisle',
            dataIndex: 'aisle',
            key: 'aisle'
        },
        {
            title: 'commom:column',
            dataIndex: 'column',
            key: 'column'
        },
        {
            title: 'd:level',
            dataIndex: 'level',
            key: 'level'
        },
        {
            title: 'd:position',
            dataIndex: 'position',
            key: 'position'
        },
        {
            title: 'd:replenish',
            dataIndex: 'replenish',
            key: 'replenish'
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

    return <AppTable type="locations" columns={columns} data={locationsData} />;
};
