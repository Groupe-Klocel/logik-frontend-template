import { AppContent, DrawerItems, Header, ProtectRoute, ScreenSpin, SideMenu} from '@components'
import { Layout } from 'antd'
import { useAppState , useAppDispatch} from 'context/AppContext'
import { DrawerProvider } from 'context/DrawerContext'
import { FC, ReactNode, useCallback } from 'react'
import { useThemeSwitcher } from 'react-css-theme-switcher'
import styled from 'styled-components'

const StyledMainLayout = styled(Layout)`
  height: 100vh;
	min-height: -moz-available;
  min-height: -webkit-fill-available;
  min-height: fill-available;
`

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
					{/* <StyledMainLayout > */}
						<AppContent>
							{children}
						</AppContent>
					{/* </StyledMainLayout > */}
					<DrawerItems />
				</DrawerProvider>
			</StyledMainLayout >
		</ProtectRoute>
	);
}

export const getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout

