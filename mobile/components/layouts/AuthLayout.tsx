import { FC, ReactNode } from 'react'
import styled from 'styled-components'


const StyledAuthLayout = styled.div`
	background-color: #FADB14;
  align-items: center;
	justify-content: center;
  flex-direction: row;
  height: 100vh;
`

export interface IAuthLayoutProps {
	children?: ReactNode
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }: IAuthLayoutProps) => {


	return (
		<StyledAuthLayout>
     	{children}
		</StyledAuthLayout >
	);
}

export const getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

export default AuthLayout