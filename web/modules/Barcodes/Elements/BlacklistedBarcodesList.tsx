import { EyeTwoTone, DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { barcodesData } from 'fake-data/barcodes';


export const BlacklistedBarcodesList = () => {
    const columns = [
        {
            title: 'common:barcode',
            dataIndex: 'barcode',
            key: 'barcode'
        },
        {
            title: 'common:product',
            dataIndex: 'product',
            key: 'product'
        },
        {
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
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
                        icon={<DeleteOutlined />}
                        danger
                        onClick={() => alert(`Delete ${record.id} - ${record.name}`)}
                    />
                </Space>
            )
        }
    ];
    return <AppTable type="blacklisted-barcodes" columns={columns} data={barcodesData} />;
};
