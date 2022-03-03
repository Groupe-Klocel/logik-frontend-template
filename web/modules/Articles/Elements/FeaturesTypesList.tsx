import { FC } from 'react';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { featureTypesData } from 'fake-data/features';
import { AppTable } from '@components';

export interface IFeaturesTypesListProps {}

export const FeaturesTypesList: FC<IFeaturesTypesListProps> = ({}) => {
    const columns = [
        {
            title: 'common:name',
            dataIndex: 'name',
            key: 'name'
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

    return (
        <AppTable
            type="features-types"
            columns={columns}
            scroll={{ x: 800 }}
            data={featureTypesData}
        />
    );
};
