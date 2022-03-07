import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { blocsData } from 'fake-data/blocs';
import { AppTable } from '@components';


export const BlocsList = () => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'common:Moveable',
            dataIndex: 'moveable',
            key: 'moveable'
        },
        {
            title: 'd:masse',
            dataIndex: 'masse',
            key: 'masse'
        },
        {
            title: 'common:comment',
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
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} `)}
                    />
                </Space>
            )
        }
    ];
    return <AppTable type="blocs" columns={columns} data={blocsData} />;
};
