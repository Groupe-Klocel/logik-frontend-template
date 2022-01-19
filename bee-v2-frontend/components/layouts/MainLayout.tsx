import { AppContent } from '@components'
import { Layout, Switch } from 'antd'
import { FC, ReactChild, ReactFragment, ReactNode, ReactPortal, useState } from 'react'
import styled from 'styled-components'
import { Header } from 'components/common/Smart/Header/Header'
import SideMenu from 'components/common/Smart/SideMenu/SideMenu'
import { WithDrawer } from 'components/common/Smart/Drawers/WithDrawer'
import { DrawerProvider } from 'helpers/context/DrawerContext'
import { DrawerItems } from 'components/common/Smart/Drawers/DrawerItems'

const StyledMainLayout = styled(Layout)`
  height: 100vh;
`
const StyledSider = styled(Layout.Sider)`
overflow: auto;
scrollbar-width: auto;

&::-webkit-scrollbar {
    width: 5px;
  }

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

`
const AlignWrapper = styled.div`
display: flex;
  align-items: center;
	justify-content:center;
  padding: 10px 0 0 0;
`

export interface IMainLayoutProps {
	children?: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }: IMainLayoutProps) => {
	// get from app context 
	const [menuCollapsed, setMenuCollapsed] = useState(true)


	const onCollapseMenu = () => {
		console.log(menuCollapsed);
		setMenuCollapsed(!menuCollapsed)
	}


	return (
		<StyledMainLayout>
			<Header />
			<StyledMainLayout >
				<DrawerProvider>
					<StyledSider collapsible collapsed={menuCollapsed} onCollapse={onCollapseMenu}>
						<SideMenu />
					</StyledSider>
					<AppContent>
						{children}
					</AppContent>
					<DrawerItems />
				</DrawerProvider>
			</StyledMainLayout >
		</StyledMainLayout >
	);
}

export const getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout