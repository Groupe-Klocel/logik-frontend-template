import { AppMenu, AppContent, AppHeader } from '@components'
import { Layout } from 'antd'
import { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

const { Header, Content, Footer, Sider } = Layout;

const StyledAppLayout = styled(Layout)`
  height: 100vh;
`
export interface IAppLayoutProps {
  children?: ReactNode
}

export const AppLayout: FC<IAppLayoutProps> = ({ children }: IAppLayoutProps) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false)

  const onCollapseMenu = () => {
    console.log(menuCollapsed);
    setMenuCollapsed(!menuCollapsed)
  }

  return (
    <StyledAppLayout>
      <Sider collapsible collapsed={menuCollapsed} onCollapse={onCollapseMenu}>
        <div className="logo" />
        <AppMenu />
      </Sider>
      <StyledAppLayout>
        <AppHeader/>
        <AppContent >
          {children}
        </AppContent>
      </StyledAppLayout>
    </StyledAppLayout>
  )
}


AppLayout.displayName = 'SiteLayout'

export default AppLayout
