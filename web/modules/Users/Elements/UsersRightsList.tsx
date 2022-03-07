import { LockOutlined } from '@ant-design/icons';
import { AppTable } from '@components';
import { Button } from 'antd';
import { usersData } from 'fake-data/users';


export const UsersRightsList = ()  => {
    const columns = [
        {
            title: 'common:username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'common:group',
            dataIndex: 'group',
            key: 'group'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Button
                    shape="circle"
                    icon={<LockOutlined />}
                    onClick={() => alert(`modify ${record.id}`)}
                />
            )
        }
    ];
    return <AppTable type="users-rights" columns={columns} scroll={{ x: 800 }} data={usersData} />;
};
