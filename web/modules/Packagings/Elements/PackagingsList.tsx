import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { packagingsData } from 'fake-data/packagings';
import { FC } from 'react';

export interface IPackagingsListProps {}

export const PackagingsList: FC<IPackagingsListProps> = ({}) => {
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'default',
            dataIndex: 'default',
            key: 'default'
        },
        {
            title: 'dispatchable',
            dataIndex: 'dispatchable',
            key: 'dispatchable'
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'length',
            dataIndex: 'length',
            key: 'length'
        },
        {
            title: 'width',
            dataIndex: 'width',
            key: 'width'
        },
        {
            title: 'height',
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
    return (
        <AppTable type="packagings" columns={columns} data={packagingsData} scroll={{ x: 800 }} />
    );
};
