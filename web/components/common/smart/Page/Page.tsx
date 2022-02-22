import { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
    display: flex;
    min-height: 100%;
`;

export interface IPageProps {
    children?: ReactNode;
}

export const Page: FC<IPageProps> = memo(({ children }: IPageProps) => {
    return <StyledPage>{children}</StyledPage>;
});

Page.displayName = 'Page';

export default Page;
