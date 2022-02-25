import { EyeTwoTone, PrinterOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { carriersData } from 'fake-data/carriers';
import { FC } from 'react';

export interface ICarriersListProps {}

export const CarriersList: FC<ICarriersListProps> = ({}) => {
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'code',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'available',
            dataIndex: 'available',
            key: 'available'
        },
        {
            title: 'to-be-loaded',
            dataIndex: 'to-be-loaded',
            key: 'to-be-loaded'
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status'
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
    return <AppTable type="carriers" columns={columns} scroll={{ x: 800 }} data={carriersData} />;
};
