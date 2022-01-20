import { AppContent } from '@components'
import { Layout } from 'antd'
import { FC, ReactNode, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from 'components/common/Smart/Header/Header'
import SideMenu from 'components/common/Smart/SideMenu/SideMenu'
import { DrawerProvider } from 'helpers/context/DrawerContext'
import { useAppState, useAppDispatch } from 'helpers/context/AppContext'
import { DrawerItems } from 'components/common/Smart/Drawers/DrawerItems'

const StyledMainLayout = styled(Layout)`
  height: 100vh;
`
const StyledSider = styled(Layout.Sider)`
border-right: 1px solid;
overflow: auto;
scrollbar-width: auto;

&::-webkit-scrollbar {
    width: 5px;
  }

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }

`

export interface IMainLayoutProps {
	children?: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }: IMainLayoutProps) => {
	// get from app context 
	const { isMenuCollapsed } = useAppState()
	const [menuCollapsed, setMenuCollapsed] = useState(isMenuCollapsed)
	console.log("menu", isMenuCollapsed)
	// const dispatchMenu = useAppDispatch()

	// const switchMenu = useCallback(
	// 	() => dispatchMenu({
	// 		type:'SWITCH_MENU',
	// 		isMenuCollapsed: !isMenuCollapsed,
	// 	}),
	// 	[dispatchMenu, isMenuCollapsed]
	// )

	const onCollapseMenu = () => {
		console.log(menuCollapsed);
		setMenuCollapsed(!menuCollapsed)
	}

	
	useEffect(() => setMenuCollapsed(menuCollapsed), [])
	return (
		<StyledMainLayout>
			<DrawerProvider>
				<Header />
				<StyledMainLayout >
					<StyledSider collapsible collapsed={menuCollapsed} onCollapse={onCollapseMenu} >
						<SideMenu />
					</StyledSider>
					<AppContent>
						{children}
					</AppContent>
				</StyledMainLayout >
				<DrawerItems />
			</DrawerProvider>
		</StyledMainLayout >
	);
}

export const getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout