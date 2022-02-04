import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { AppTable } from '@components';
import { equipmentsData } from 'fake-data/equipments';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react'

export interface IEquipmentsListProps {

}

export const EquipmentsList: FC<IEquipmentsListProps> = ({ }) => {
	let { t } = useTranslation('common')

	const columns = [
		{
			title: t("priority"),
			dataIndex: 'priority',
			key: 'priority',
			fixed: 'left',
		},
		{
			title: t("type"),
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: t("name"),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: t("status"),
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: t("available"),
			dataIndex: 'available',
			key: 'available',
		},
		{
			title: t("distributed"),
			dataIndex: 'distributed',
			key: 'distributed',
		},
		{
			title: t("mono-company"),
			dataIndex: 'mono-company',
			key: 'mono-company',
		},
		{
			title: t("mono-carrier"),
			dataIndex: 'mono-carrier',
			key: 'mono-carrier',
		},
		{
			title: t("nb-max-box"),
			dataIndex: 'nb-max-box',
			key: 'nb-max-box',
		},
		{
			title: t("check-position"),
			dataIndex: 'check-position',
			key: 'check-position',
		},
		{
			title: t("actions"),
			key: 'actions',
			fixed: 'right',
			render: (record: { id: number; name: string; }) => (
				<Space>
						<Button
						onClick={() => alert(`GO UP `)} icon={<CaretUpOutlined />}>
					</Button>
						<Button
						onClick={() => alert(`GO DOWN `)} icon={<CaretDownOutlined />}>
					</Button>
						<Button
						onClick={() => alert(`View ${record.id} - ${record.name}`)}>
						{t("view")}
					</Button>
					</Space>
			),
		},
	];
	return (
		<AppTable columns={columns} data={equipmentsData} scroll={{ x: 800 }} />
	);
}