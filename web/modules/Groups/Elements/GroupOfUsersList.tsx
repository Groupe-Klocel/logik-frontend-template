import { CheckCircleOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { AppTable } from '@components';
import { usersData } from 'fake-data/users';
import { FC } from 'react';

export interface IGroupOfUsersListProps {}

export const GroupOfUsersList: FC<IGroupOfUsersListProps> = ({}) => {
    const columns = [
        {
            title: 'common:username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'common:administator',
            key: 'admin',
            render: (record: { admin: boolean }) => {
                return record.admin ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: 'common:operator',
            key: 'ope',
            render: (record: { ope: boolean }) => {
                return record.ope ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        },
        {
            title: 'common:prepers',
            key: 'prep',
            render: (record: { prep: boolean }) => {
                return record.prep ? (
                    <CheckCircleOutlined style={{ color: 'green' }} />
                ) : (
                    <CloseSquareOutlined style={{ color: 'red' }} />
                );
            }
        }
    ];
    return (
        <AppTable type="group-of-users" columns={columns} scroll={{ x: 800 }} data={usersData} />
    );
};
