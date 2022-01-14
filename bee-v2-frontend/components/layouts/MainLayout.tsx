import { AppContent } from '@components'
import { Layout, Switch } from 'antd'
import { FC, ReactChild, ReactFragment, ReactNode, ReactPortal, useState } from 'react'
import styled from 'styled-components'
import { Header } from 'components/common/Smart/Header/Header'
import SideMenu from 'components/common/Smart/SideMenu/SideMenu'
import { WithDrawer } from 'components/common/Smart/Drawers/WithDrawer'


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
	const [menuCollapsed, setMenuCollapsed] = useState(true)
	const [theme, setTheme] = useState('dark');
	
	
	const onCollapseMenu = () => {
		console.log(menuCollapsed);
		setMenuCollapsed(!menuCollapsed)
	}

	const changeTheme =( value: string )=> {
    setTheme(value ? 'light' : 'dark');
  };

	return (
		<StyledMainLayout>
			<Header />
			<StyledMainLayout >
				<WithDrawer>
				<StyledSider theme={theme} collapsible collapsed={menuCollapsed} onCollapse={onCollapseMenu}>
					<AlignWrapper>
						<Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={changeTheme} />
					</AlignWrapper>
					<SideMenu theme={theme} />
				</StyledSider>
					<AppContent >
						{children}
					</AppContent>
				</WithDrawer>
			</StyledMainLayout >
		</StyledMainLayout >
	);
}

export const getLayout = (page: any) => <MainLayout>{page}</MainLayout>;

export default MainLayout