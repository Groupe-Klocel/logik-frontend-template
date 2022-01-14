import { AppHead, AppLayout } from '@components'
import { Layout, Input, Space, Button, Select } from 'antd'
import { NextPage } from 'next'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation';
import { ReturnCodesList } from 'modules/Views/ReturnCodesList'
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
export interface IReturnCodesPageProps { }

export const ReturnCodesPage: NextPage<IReturnCodesPageProps> = () => {
	let { t } = useTranslation('common')


	return (
		<>
			<AppHead title="Bee V2" />
			<AppLayout>
				<StyledActionHeader>
					<Space>
					<Button type="primary" shape="round"
								onClick={() => alert("New Return Code")}>
								{t("new-return-code")}
							</Button>
					<Button type="primary" shape="round"
								onClick={() => alert("Print")}>
								{t("print")}
							</Button>
</Space>
				</StyledActionHeader>
				<StyledPageContent>
					<ReturnCodesList />
				</StyledPageContent>
			</AppLayout>
		</>
	)
}

ReturnCodesPage.displayName = 'ReturnCodesPage'

export default ReturnCodesPage