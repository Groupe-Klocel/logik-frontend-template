import { META_DEFAULTS } from '@configs/misc'
import { Breadcrumb, Layout } from 'antd'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';


const StyledAppContent = styled(Layout.Content)`
  padding: 24px;
`

export interface IAppContentProps {
	children?: ReactNode
}


export const AppContent: FC<IAppContentProps> = ({ children }: IAppContentProps) => {

	return (
			<StyledAppContent>
				{children}
			</StyledAppContent>
	)
}

AppContent.displayName = 'AppContent'

export default AppContent
