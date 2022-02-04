
import { FC } from 'react'
import useTranslation from 'next-translate/useTranslation';
import { Button, Row } from 'antd'
import { featureTypesData } from 'fake-data/features'
import { AppTable } from '@components';

export interface IFeaturesTypesListProps {

}

export const FeaturesTypesList: FC<IFeaturesTypesListProps> = ({ }) => {
	let { t } = useTranslation()

	const columns = [
		{
			title: t('common:name'),
			dataIndex: 'name',
			key: 'name',
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
		<AppTable
		columns={columns}
		scroll={{ x: 800 }} data={featureTypesData} />
	);
}