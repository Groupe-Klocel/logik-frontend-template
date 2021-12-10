import { Layout } from 'antd'
import { FC } from 'react'
import styled from 'styled-components';

const StyledAppFooter = styled(Layout.Footer)`
  textAlign: center;
`

export interface IAppFooterProps { }

export const AppFooter: FC<IAppFooterProps> = ({ }: IAppFooterProps) => {
  return (
    <StyledAppFooter>
      Bee ©2022 Created by Nuage Studio
    </StyledAppFooter>
  )
}

AppFooter.displayName = 'AppFooter'

export default AppFooter
