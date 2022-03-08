import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { featureCodesData } from 'fake-data/features';
import { AppTable } from '@components';


export const FeaturesCodesList = () => {
    const columns = [
        {
            title: 'common:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'common:unique',
            dataIndex: 'unique',
            key: 'unique'
        },
        {
            title: 'd:dateType',
            dataIndex: 'date-type',
            key: 'date-type'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Space>
                    <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
                    <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
                    <Button
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} `)}
                    />
                </Space>
            )
        }
    ];

    return <AppTable type="features-codes" columns={columns} data={featureCodesData} />;
};
