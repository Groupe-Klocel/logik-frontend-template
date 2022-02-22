import { FC } from 'react';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import useTranslation from 'next-translate/useTranslation';
import { Button, Space } from 'antd';
import { featureTypesData } from 'fake-data/features';
import { AppTable } from '@components';

export interface IFeaturesTypesListProps {}

export const FeaturesTypesList: FC<IFeaturesTypesListProps> = ({}) => {
    let { t } = useTranslation();

    const columns = [
        {
            title: t('common:name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('actions:actions'),
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
