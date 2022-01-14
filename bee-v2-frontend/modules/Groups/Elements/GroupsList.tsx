
import { FC, useState } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button, Space } from 'antd'
import { groupsData } from 'fake-data/groups'
import { AppTable } from '@components';

export interface GroupsListProps {

}

export const GroupsList: FC<GroupsListProps> = ({ }) => {
	let { t } = useTranslation('common')
  const [value, setValue] = useState('');

	console.log(value)
	const drawerProps = {
		context: value,
		title:"test2",
		placement:'right',
		content: <div>testé</div>,
		onConfirm: (_, context) => setValue('ff'),
	}

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
		<AppTable columns={columns} data={groupsData} drawerPrps={drawerProps}/>
	);
}