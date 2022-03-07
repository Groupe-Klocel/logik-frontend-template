import { Button } from 'antd';
import { settingsData } from 'fake-data/settings';
import { AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';


export const SettingsList = () => {
    const columns = [
        {
            title: 'common:param-category',
            dataIndex: 'param-category',
            key: 'param-category'
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:value',
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: 'd:system',
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
    return <AppTable type="settings" columns={columns} data={settingsData} />;
};
