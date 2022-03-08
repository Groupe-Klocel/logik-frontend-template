import { CaretUpOutlined, CaretDownOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { equipmentsData } from 'fake-data/equipments';

export const EquipmentsList = () => {
    const columns = [
        {
            title: 'd:priority',
            dataIndex: 'priority',
            key: 'priority',
            fixed: 'left'
        },
        {
            title: 'd:type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'd:available',
            dataIndex: 'available',
            key: 'available'
        },
        {
            title: 'd:distributed',
            dataIndex: 'distributed',
            key: 'distributed'
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
    return <AppTable type="equipments" columns={columns} data={equipmentsData} />;
};
