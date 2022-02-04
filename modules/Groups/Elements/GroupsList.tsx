
import { AppTable } from '@components';
import { Button, Space } from 'antd';
import { groupsData } from 'fake-data/groups';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

export interface GroupsListProps {

}

export const GroupsList: FC<GroupsListProps> = ({ }) => {
	let { t } = useTranslation('common')
	const [value, setValue] = useState('');
	const columns = [
		{
			title: t("name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("actions"),
			dataIndex: 'actions',
			key: 'actions',
			render: (record: { id: number; name: string; }) => (
				<Space size="small">
					<Button
						onClick={() => alert(`View ${record.id} - ${record.name}`)}>
						{t("view")}
					</Button>
					<Button
						onClick={() => alert(`Modify ${record.id} - ${record.name}`)}>
						{t("modify")}
					</Button>
					<Button
						onClick={() => alert(`Delete ${record.id} - ${record.name}`)}>
						{t("delete")}
					</Button>
				</Space>

			),
		},
	];
	return (
		<AppTable
		columns={columns}
		scroll={{ x: 800 }} data={groupsData} />);
}