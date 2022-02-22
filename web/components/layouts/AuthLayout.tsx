import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledAuthLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: #fadb14;
`;

export interface IAuthLayoutProps {
    children?: ReactNode;
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }: IAuthLayoutProps) => {
    return <StyledAuthLayout>{children}</StyledAuthLayout>;
};

export const getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

export default AuthLayout;
