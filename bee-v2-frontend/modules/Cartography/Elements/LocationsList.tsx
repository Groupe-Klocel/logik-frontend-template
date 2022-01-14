
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button, Row } from 'antd'
import { locationsData } from 'fake-data/locations'
import { AppTable } from '@components';

export interface ILocationsListProps {

}

export const LocationsList: FC<ILocationsListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [

		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Bloc',
			dataIndex: 'bloc',
			key: 'bloc',
		},
		{
			title: 'Aisle',
			dataIndex: 'aisle',
			key: 'aisle',
		},
		{
			title: 'Column',
			dataIndex: 'column',
			key: 'column',
		},
		{
			title: 'Level',
			dataIndex: 'level',
			key: 'level',
		},
		{
			title: 'Position',
			dataIndex: 'position',
			key: 'position',
		},
		{
			title: 'Replenish',
			dataIndex: 'replenish',
			key: 'replenish',
		},
		{
			title: t("actions"),
			key: 'actions',
			render: (record: { id: number }) => (
				<Row>

					<Button
						onClick={() => alert(`View ${record.id} `)}
					> {t("view")} </Button>
					< Button
						onClick={() => alert(`Edit ${record.id} `)}
					> {t("edit")} </Button>
					< Button
						onClick={() => alert(`Delete ${record.id} `)}
					> {t("delete")} </Button>
				</Row>

			),
		},
	]

	return (
		<AppTable columns={columns} data={locationsData} />
	);
}