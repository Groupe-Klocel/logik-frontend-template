import { AppTable } from '@components';
import { Button } from 'antd';
import { returnCodesData } from 'fake-data/returnCodes';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { EyeTwoTone } from '@ant-design/icons';

export interface IReturnCodesListProps {}

export const ReturnCodesList: FC<IReturnCodesListProps> = ({}) => {
    let { t } = useTranslation('common');

    const columns = [
        {
            title: t('name'),
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: t('description'),
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: t('type'),
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: t('actions:actions'),
            key: 'actions',
            fixed: 'right',
            render: (record: { id: number; name: string }) => (
                <Button
                    icon={<EyeTwoTone />}
                    onClick={() => alert(`View ${record.id} - ${record.name}`)}
                />
            )
        }
    ];
    return (
        <AppTable
            type="return-codes"
            columns={columns}
            scroll={{ x: 800 }}
            data={returnCodesData}
        />
    );
};
