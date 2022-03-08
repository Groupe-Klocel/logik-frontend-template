import { Button } from 'antd';
import { companiesData } from 'fake-data/companies';
import { AppTable } from '@components';
import { EyeTwoTone } from '@ant-design/icons';


export const CompaniesList = ()  => {
    const columns = [
        {
            title: 'd:name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'common:address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'common:postalCode',
            dataIndex: 'postal-code',
            key: 'postal-code'
        },
        {
            title: 'common:city',
            dataIndex: 'city',
            key: 'city'
        },
        {
            title: 'common:country',
            dataIndex: 'country',
            key: 'country'
        },
        {
            title: 'd:status',
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
    return <AppTable type="companies" columns={columns} data={companiesData} />;
};
