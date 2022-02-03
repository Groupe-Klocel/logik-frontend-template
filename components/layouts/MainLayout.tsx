import { AppContent, DrawerItems, Header, ProtectRoute, ScreenSpin, SideMenu } from '@components'
import { Layout } from 'antd'
import { useAppState , useAppDispatch} from 'context/AppContext'
import { DrawerProvider } from 'context/DrawerContext'
import { FC, ReactNode, useCallback } from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import styled from 'styled-components'

const StyledMainLayout = styled(Layout)`
  height: 100vh;
`
// const Scroll = styled.div`
// overflow: auto;
// scrollbar-width: auto;

// &::-webkit-scrollbar {
//     width: 5px;
//   }

// &::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//   }
// `;

export interface IMainLayoutProps {
	children?: ReactNode
}



const MainLayout: FC<IMainLayoutProps> = ({ children }: IMainLayoutProps) => {
	// get from app context 
	const { isSessionMenuCollapsed } = useAppState()
	const { status } = useThemeSwitcher();

	const dispatchMenu = useAppDispatch()
	const switchMenuSession = useCallback(
		() => dispatchMenu({
			type: 'SWITCH_MENU_SESSION',
			isSessionMenuCollapsed: !isSessionMenuCollapsed,
		}),
		[dispatchMenu, isSessionMenuCollapsed]
	) 

	const onCollapseMenu = () => {
		switchMenuSession()
	}

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
						<Layout.Sider collapsible collapsed={isSessionMenuCollapsed} onCollapse={onCollapseMenu} style={{overflow:'auto'}}>
							{/* <Scroll> */}
								<SideMenu />
							{/* </Scroll> */}
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

