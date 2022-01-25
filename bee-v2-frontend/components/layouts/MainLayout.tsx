import { AppContent } from '@components'
import { Layout } from 'antd'
import { ProtectRoute } from 'components/common/Dumb/ProtectRoute/ProtectRoute'
import { ScreenSpin } from 'components/common/Dumb/ScreenSpin/ScreenSpin'
import { DrawerItems } from 'components/common/Smart/Drawers/DrawerItems'
import { Header } from 'components/common/Smart/Header/Header'
import SideMenu from 'components/common/Smart/SideMenu/SideMenu'
import { useAppDispatch, useAppState } from 'helpers/context/AppContext'
import { DrawerProvider } from 'helpers/context/DrawerContext'
import { getMenuState } from 'helpers/utils/utils'
import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import styled from 'styled-components'

const StyledMainLayout = styled(Layout)`
  height: 100vh;
`
const StyledSpinWrapper = styled.div`
display: flex;
justify-content:center; // centers in the flex direction and the default flex-direction is row
align-items:center; // centers perpendicular to the flex direction
height: 100vh; 
width: 100vw; 
position: absolute; // so it goes behind the current content
`;
const Scroll = styled.div`
overflow: auto;
scrollbar-width: auto;

&::-webkit-scrollbar {
    width: 5px;
  }

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;

export interface IMainLayoutProps {
	children?: ReactNode
}

const MainLayout: FC<IMainLayoutProps> = ({ children }: IMainLayoutProps) => {
	// get from app context 
	const { isMenuCollapsed } = useAppState()
	const { status } = useThemeSwitcher();

	const [menuCollapsed, setMenuCollapsed] = useState(isMenuCollapsed)
	const dispatchMenu = useAppDispatch()

	const switchMenu = useCallback(
		() => dispatchMenu({
			type: 'SWITCH_MENU',
			isMenuCollapsed: getMenuState(isMenuCollapsed),
		}),
		[dispatchMenu, isMenuCollapsed]
	)

	const onCollapseMenu = () => {
		setMenuCollapsed(!menuCollapsed)
	}

	useEffect(() => {
		setMenuCollapsed(isMenuCollapsed)
	}, [isMenuCollapsed])



	if (status !== 'loaded') {
		return (
			<ScreenSpin />
		)
	}

	return (
		<ProtectRoute>
			<StyledMainLayout>
				<DrawerProvider>
					<Header />
					<StyledMainLayout >
						<Layout.Sider collapsible collapsed={menuCollapsed} onCollapse={onCollapseMenu} >
							<Scroll>
								<SideMenu />
							</Scroll>
						</Layout.Sider>
						<AppContent>
							{children}
						</AppContent>
					</StyledMainLayout >
					<DrawerItems />
				</DrawerProvider>
			</StyledMainLayout >
		</ProtectRoute>
	);
}

export const getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout