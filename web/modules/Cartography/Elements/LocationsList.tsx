import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, Space } from 'antd';
import { locationsData } from 'fake-data/locations';
import { AppTable } from '@components';
import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';

export interface ILocationsListProps {}

export const LocationsList: FC<ILocationsListProps> = ({}) => {
    let { t } = useTranslation('common');

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Bloc',
            dataIndex: 'bloc',
            key: 'bloc'
        },
        {
            title: 'Aisle',
            dataIndex: 'aisle',
            key: 'aisle'
        },
        {
            title: 'Column',
            dataIndex: 'column',
            key: 'column'
        },
        {
            title: 'Level',
            dataIndex: 'level',
            key: 'level'
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position'
        },
        {
            title: 'Replenish',
            dataIndex: 'replenish',
            key: 'replenish'
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

    return <AppTable type="locations" columns={columns} scroll={{ x: 800 }} data={locationsData} />;
};
