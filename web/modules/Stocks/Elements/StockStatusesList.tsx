import { DeleteOutlined, EyeTwoTone, EditTwoTone } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { stockData } from 'fake-data/stock';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export interface IStockStatusesListProps {}

export const StockStatusesList: FC<IStockStatusesListProps> = ({}) => {
    let { t } = useTranslation('common');

    const columns = [
        {
            title: t('name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('value'),
            dataIndex: 'value',
            key: 'value'
        },
        {
            title: t('system'),
            dataIndex: 'system',
            key: 'system'
        },
        {
            title: t('comment'),
            dataIndex: 'comment',
            key: 'comment'
        },
        {
            title: t('actions:actions'),
            key: 'actions',
            render: (record: { id: number }) => (
                <Space>
                    <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
                    <Button icon={<EditTwoTone />} onClick={() => alert(`Edit ${record.id} `)} />
                </Space>
            )
        }
    ];
    return (
        <AppTable type="stock-statuses" columns={columns} scroll={{ x: 800 }} data={stockData} />
    );
};
