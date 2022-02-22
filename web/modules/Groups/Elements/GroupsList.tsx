import { AppTable } from '@components';
import { Button, Space } from 'antd';
import { groupsData } from 'fake-data/groups';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';

export interface GroupsListProps {}

export const GroupsList: FC<GroupsListProps> = ({}) => {
    let { t } = useTranslation();
    const [value, setValue] = useState('');
    const columns = [
        {
            title: t('common:name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('actions:actions'),
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
    return <AppTable type="groups" columns={columns} scroll={{ x: 800 }} data={groupsData} />;
};
