import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderContent, LinkButton } from '@components';
import { usersRoutes } from 'modules/Users/Static/usersRoutes';
import useTranslation from 'next-translate/useTranslation';
import styled from 'styled-components';
import { UserDetails } from '../Elements/UserDetails';

const StyledPageContent = styled(Layout.Content)`
    margin: 15px 30px;
`;

export interface ISingleUserProps {
    username: string;
}

export const SingleUser: FC<ISingleUserProps> = ({ username }: ISingleUserProps) => {
    const { t } = useTranslation('common');

    // NEED TO FETCH SPECIFIC USER DATA BY ID TO DISPLAY USER DATA

    const singleUserRoutes = [
        ...usersRoutes,
        {
            breadcrumbName: username
        }
    ];

    return (
        <>
            <HeaderContent
                title={username}
                routes={singleUserRoutes}
                actionsRight={
                    <>
                        <LinkButton title={t('new-user')} path="/new-user" />
                    </>
                }
            />
            <StyledPageContent>
                <UserDetails />
            </StyledPageContent>
        </>
    );
};
