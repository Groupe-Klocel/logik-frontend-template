
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button, Row } from 'antd'
import { featureCodesData } from 'fake-data/features'
import { AppTable } from '@components';

export interface IFeaturesCodesListProps {

}

export const FeaturesCodesList: FC<IFeaturesCodesListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("common:name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("common:unique"),
			dataIndex: 'unique',
			key: 'unique',
		},
		{
			title: t("forms:date-type"),
			dataIndex: 'date-type',
			key: 'date-type',
		},
		{
			title: t("actions:actions"),
			key: 'actions',
			render: (record: { id: number }) => (
				<Row>

					<Button
						onClick={() => alert(`View ${record.id} `)}
					> {t("actions:view")} </Button>
					< Button
						onClick={() => alert(`Edit ${record.id} `)}
					> {t("actions:edit")} </Button>
					< Button
						onClick={() => alert(`Delete ${record.id} `)}
					> {t("actions:delete")} </Button>
				</Row>

			),
		},
	]

	return (
		<AppTable columns={columns} data={featureCodesData} />
	);
}