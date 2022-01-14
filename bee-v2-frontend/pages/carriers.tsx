
import { AppHead, AppLayout } from '@components'
import { Layout, Input, Space, Button, Select } from 'antd'
import { NextPage } from 'next'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation';
import { CarriersList } from 'modules/Views/CarriersList'
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


export interface ICarriersPageProps { }

export const CarriersPage: NextPage<ICarriersPageProps> = () => {
	let { t } = useTranslation('common')


	return (
		<>
			<AppHead title="Bee V2" />
			<AppLayout>
				<StyledActionHeader>
					<Space>
					<Button type="primary" shape="round"
								onClick={() => alert("New Carrier")}>
								{t("new-carrier")}
							</Button>
					<Button type="primary" shape="round"
								onClick={() => alert("Shipping Notice")}>
								{t("shipping-notice")}
							</Button>
</Space>
				</StyledActionHeader>
				<StyledPageContent>
					<CarriersList />
				</StyledPageContent>
			</AppLayout>
		</>
	)
}

CarriersPage.displayName = 'CarriersPage'

export default CarriersPage