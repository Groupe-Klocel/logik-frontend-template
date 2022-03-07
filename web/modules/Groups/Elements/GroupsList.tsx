import { AppTable } from '@components';
import { Button, Space } from 'antd';
import { groupsData } from 'fake-data/groups';
import { FC } from 'react';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';

export interface GroupsListProps {}

export const GroupsList: FC<GroupsListProps> = ({}) => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'actions:actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (record: { id: number; name: string }) => (
                <Space size="small">
                    <Button
                        icon={<EyeTwoTone />}
                        onClick={() => alert(`View ${record.id} - ${record.name}`)}
                    />
                    <Button
                        icon={<EditTwoTone />}
                        onClick={() => alert(`Edit ${record.id} - ${record.name}`)}
                    />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} - ${record.name}`)}
                    />
                </Space>
            )
        }
    ];
    return <AppTable type="groups" columns={columns} data={groupsData} />;
};
