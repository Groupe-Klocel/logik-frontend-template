import { Layout } from 'antd'
import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';


const StyledAppContent = styled(Layout.Content)`
overflow-y: scroll;
scrollbar-width: auto;
scrollbar-color: #8f54a0 #ffffff;
&::-webkit-scrollbar {
    width: 14px;
  }

&::-webkit-scrollbar-track {
    background: #ffffff;
  }

&::-webkit-scrollbar-thumb {
    background-color: #262630;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
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
