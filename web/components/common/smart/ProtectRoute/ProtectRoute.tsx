import { ScreenSpin } from '@components';
import { OnlyChildrenType, showError } from '@helpers';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { GetMyInfoQuery, useGetMyInfoQuery } from 'generated/graphql';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppState } from 'context/AppContext';

const ProtectRoute: any | null = ({ children }: OnlyChildrenType) => {
    const router = useRouter();
    const { isAuthenticated, loading, graphqlRequestClient, logout } = useAuth();
    const { user } = useAppState();
    const dispatchUser = useAppDispatch();
    const setUserInfo = useCallback(
        (newUser) =>
            dispatchUser({
                type: 'SET_USER_INFO',
                user: newUser
            }),
        [dispatchUser, user]
    );

    const { data, error } = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(graphqlRequestClient);

    useEffect(() => {
        console.log('check current session');
        if (error) {
            showError('Your session has been expired, please login again.');
            setTimeout(logout, 2000);
        }
        if (data) {
            if (user.toString() !== data.me!.toString()) {
                setUserInfo(data.me);
            } else {
                console.log('skip set user info');
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
