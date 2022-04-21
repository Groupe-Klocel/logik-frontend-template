import { ScreenSpin } from '@components';
import { cookie, OnlyChildrenType, showError } from '@helpers';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { GetMyInfoQuery, useGetMyInfoQuery } from 'generated/graphql';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppState } from 'context/AppContext';
import useTranslation from 'next-translate/useTranslation';
import { ContentSpin } from 'components/common/dumb/Spinners/ContentSpin';
import { GraphQLClient } from 'graphql-request';

const ProtectRoute: any | null = ({ children }: OnlyChildrenType) => {
    const router = useRouter();
    const { t } = useTranslation();
    const { isAuthenticated, loading, logout } = useAuth();
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
    const token = cookie.get('token');
    const requestHeader = {
        authorization: `Bearer ${token}`
    };
    const graphqlRequestClient = new GraphQLClient(
        process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
        {
            headers: requestHeader
        }
    );
    console.log('pretect route/ useGetMyInfoQuery');
    const { isLoading, data, error } = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(
        graphqlRequestClient
    );

    useEffect(() => {
        // console.log('check current session');
        if (data && !isLoading) {
            console.log('data str', JSON.stringify(data.me!));
            console.log('user str', JSON.stringify(user));
            if (JSON.stringify(data.me!) !== JSON.stringify(user)) {
                // console.log('user info is different');
                setUserInfo(data.me);
                router.push('/login');
            } else {
                // console.log('skip set user info');
            }
        }
    }, [isLoading, data]);

    useEffect(() => {
        if (!isLoading && error) {
            console.log('protectroute cookies', cookie.get('token'));
            console.log('data = null');
            showError('Your session has been expired, please login again.');
            setTimeout(logout, 2000);
        }
    }, [isLoading, error]);

    if (loading || (!isAuthenticated && router.pathname !== '/login')) {
        router.push('/login');
        return <ScreenSpin />;
    }
    return children;
};

ProtectRoute.displayName = 'ProtectRoute';

export { ProtectRoute };
