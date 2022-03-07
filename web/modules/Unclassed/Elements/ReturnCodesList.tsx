import { AppTable } from '@components';
import { Button } from 'antd';
import { returnCodesData } from 'fake-data/returnCodes';
import { FC } from 'react';
import { EyeTwoTone } from '@ant-design/icons';

export interface IReturnCodesListProps {}

export const ReturnCodesList: FC<IReturnCodesListProps> = ({}) => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'd:description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'd:type',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'actions:actions',
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
            data={returnCodesData}
        />
    );
};
