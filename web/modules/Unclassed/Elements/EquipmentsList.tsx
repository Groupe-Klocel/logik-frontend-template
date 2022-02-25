import { CaretUpOutlined, CaretDownOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { equipmentsData } from 'fake-data/equipments';
import { FC } from 'react';

export interface IEquipmentsListProps {}

export const EquipmentsList: FC<IEquipmentsListProps> = ({}) => {
    const columns = [
        {
            title: 'priority',
            dataIndex: 'priority',
            key: 'priority',
            fixed: 'left'
        },
        {
            title: 'type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'available',
            dataIndex: 'available',
            key: 'available'
        },
        {
            title: 'distributed',
            dataIndex: 'distributed',
            key: 'distributed'
        },
        {
            title: 'mono-company',
            dataIndex: 'mono-company',
            key: 'mono-company'
        },
        {
            title: 'mono-carrier',
            dataIndex: 'mono-carrier',
            key: 'mono-carrier'
        },
        {
            title: 'nb-max-box',
            dataIndex: 'nb-max-box',
            key: 'nb-max-box'
        },
        {
            title: 'check-position',
            dataIndex: 'check-position',
            key: 'check-position'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            fixed: 'right',
            render: (record: { id: number; name: string }) => (
                <Space>
                    <Button onClick={() => alert(`GO UP `)} icon={<CaretUpOutlined />} />
                    <Button onClick={() => alert(`GO DOWN `)} icon={<CaretDownOutlined />} />
                    <Button
                        icon={<EyeTwoTone />}
                        onClick={() => alert(`View ${record.id} - ${record.name}`)}
                    />
                </Space>
            )
        }
    ];
    return (
        <AppTable type="equipments" columns={columns} data={equipmentsData} scroll={{ x: 800 }} />
    );
};
