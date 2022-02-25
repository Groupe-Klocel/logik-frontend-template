import { FC } from 'react';
import { Button } from 'antd';
import { companiesData } from 'fake-data/companies';
import { AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';

export interface ICompaniesListProps {}

export const CompaniesList: FC<ICompaniesListProps> = ({}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Postal Code',
            dataIndex: 'postal-code',
            key: 'postal-code'
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city'
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'actions:actions',
            key: 'actions',
            render: (record: { id: number }) => (
                <Button icon={<EyeTwoTone />} onClick={() => alert(`View ${record.id} `)} />
            )
        }
    ];
    return <AppTable type="companies" columns={columns} scroll={{ x: 800 }} data={companiesData} />;
};
