import { FC } from 'react';
import { Button } from 'antd';
import { settingsData } from 'fake-data/settings';
import { AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';

export interface ISettingsListProps {}

export const SettingsList: FC<ISettingsListProps> = ({}) => {
    const columns = [
        {
            title: 'common:param-category',
            dataIndex: 'param-category',
            key: 'param-category'
        },
        {
            title: 'common:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'common:value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'common:system',
            dataIndex: 'system',
            key: 'system'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
            )
        }
    ];
    return <AppTable type="settings" columns={columns} scroll={{ x: 800 }} data={settingsData} />;
};
