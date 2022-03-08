import { Button } from 'antd';
import { usersData } from 'fake-data/users';
import { AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';

export const UsersList = ()  => {
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
            title: 'common:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number; username: string }) => (
                <Button
                    icon={<EyeTwoTone />}
                    onClick={() => alert(`View ${record.id} - ${record.username}`)}
                />
            )
        }
    ];

    return <AppTable type="users" columns={columns} scroll={{ x: 800 }} data={usersData} />;
};
