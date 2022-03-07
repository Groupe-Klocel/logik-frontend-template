import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { packagingsData } from 'fake-data/packagings';
import { FC } from 'react';

export interface IPackagingsListProps {}

export const PackagingsList: FC<IPackagingsListProps> = ({}) => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'd:default',
            dataIndex: 'default',
            key: 'default'
        },
        {
            title: 'd:dispatchable',
            dataIndex: 'dispatchable',
            key: 'dispatchable'
        },
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'd:length',
            dataIndex: 'length',
            key: 'length'
        },
        {
            title: 'd:width',
            dataIndex: 'width',
            key: 'width'
        },
        {
            title: 'd:height',
            dataIndex: 'height',
            key: 'height'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number; name: string }) => (
                <Space>
                    <Button
                        icon={<EyeTwoTone />}
                        onClick={() => alert(`View ${record.id} - ${record.name}`)}
                    />
                    <Button
                        icon={<PrinterOutlined />}
                        onClick={() => alert(`Print ${record.id} - ${record.name}`)}
                    />
                </Space>
            )
        }
    ];
    return <AppTable type="packagings" columns={columns} data={packagingsData} />;
};
