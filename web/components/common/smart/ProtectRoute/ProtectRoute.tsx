import { ScreenSpin } from '@components';
import { OnlyChildrenType, showError } from '@helpers';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { GetMyInfoQuery, useGetMyInfoQuery } from 'generated/graphql';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppState } from 'context/AppContext';
import useTranslation from 'next-translate/useTranslation';
import { ContentSpin } from 'components/common/dumb/Spinners/ContentSpin';

const ProtectRoute: any | null = ({ children }: OnlyChildrenType) => {
    const router = useRouter();
    const { t } = useTranslation();
    const { isAuthenticated, loading, graphqlRequestClient, logout } = useAuth();
    const { user, permissions } = useAppState();
    const dispatchUser = useAppDispatch();
    const setUserInfo = useCallback(
        (newUser) =>
            dispatchUser({
                type: 'SET_USER_INFO',
                user: newUser
            }),
        [dispatchUser, user]
    );

    const { isLoading, data, error } = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        // console.log('check current session');
        if (error) {
            showError('Your session has been expired, please login again.');
            setTimeout(logout, 2000);
        }
        if (data) {
            // console.log('data str', JSON.stringify(data.me!));
            // console.log('user str', JSON.stringify(user));
            if (JSON.stringify(data.me!) !== JSON.stringify(user)) {
                setUserInfo(data.me);
            } else {
                // console.log('skip set user info');
            }
        }
    }, [data, error]);

    if (loading || (!isAuthenticated && router.pathname !== '/login')) {
        router.push('/login');
        return <ScreenSpin />;
    }
    return children;
};

ProtectRoute.displayName = 'ProtectRoute';

export { ProtectRoute };
