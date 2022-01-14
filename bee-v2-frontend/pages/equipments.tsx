
import { AppHead, AppLayout } from '@components'
import { Layout, Input, Space, Button, Select } from 'antd'
import { NextPage } from 'next'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation';
import { EquipmentsList } from 'modules/Views/EquipmentsList'
import { SearchOutlined } from '@ant-design/icons';


const StyledPageContent = styled(Layout.Content)`
	margin: 15px 0 ;
	max-height: 75vh;
`
const StyledActionHeader = styled(Layout.Header)`
  background-color: white;
	height:10vh;
  padding: 0 5px;
`
const StyledInputGroup = styled(Input.Group)`
  vertical-align: middle;
`
const StyledSelect = styled(Select)`
 width: 50%;
`

export interface IEquipmentsPageProps { }

export const EquipmentsPage: NextPage<IEquipmentsPageProps> = () => {
	let { t } = useTranslation('common')


	const optionsStatus = [{
		"label": "IN PROGRESS",
		"value": "in-progress"
	}, {
		"label": "CLOSED",
		"value": "closed"
	}]


	return (
		<>
			<AppHead title="Bee V2" />
			<AppLayout>
				<StyledActionHeader>
					<Space>
					<Button type="primary" shape="round"
								onClick={() => alert("New Equipments")}>
								{t("new-equipment")}
							</Button>
					<Button type="primary" shape="round"
								onClick={() => alert("Equipments labels")}>
								{t("equipment-labels")}
							</Button>
							
							<StyledInputGroup compact>
							<StyledSelect
								allowClear
								placeholder={t("select-status")}
								options={optionsStatus}
							/>
							<Button type="primary" icon={<SearchOutlined />}>
								{t("search")}
							</Button>
						</StyledInputGroup>
</Space>
				</StyledActionHeader>
				<StyledPageContent>
					<EquipmentsList />
				</StyledPageContent>
			</AppLayout>
		</>
	)
}

EquipmentsPage.displayName = 'EquipmentsPage'

export default EquipmentsPage