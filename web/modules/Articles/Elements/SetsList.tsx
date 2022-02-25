import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { setsData } from 'fake-data/sets';
import { FC } from 'react';

export interface ISetsListProps {}

export const SetsList: FC<ISetsListProps> = ({}) => {
    const columns = [
        {
            title: 'common:company',
            dataIndex: 'company',
            key: 'company'
        },
        {
            title: 'common:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'common:article',
            dataIndex: 'article',
            key: 'article'
        },
        {
            title: 'forms:product-description',
            dataIndex: 'product-description',
            key: 'product-description'
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
    return <AppTable type="sets" columns={columns} scroll={{ x: 800 }} data={setsData} />;
};
