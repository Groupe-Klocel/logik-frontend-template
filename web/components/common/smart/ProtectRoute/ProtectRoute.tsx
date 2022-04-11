import { ScreenSpin } from '@components';
import { OnlyChildrenType, showError } from '@helpers';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { GetMyInfoQuery, useGetMyInfoQuery } from 'generated/graphql';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppState } from 'context/AppContext';
import { route } from 'next/dist/server/router';
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
    const [isAllowed, setIsAllowed] = useState(true);

    const { isLoading, data, error } = useGetMyInfoQuery<Partial<GetMyInfoQuery>, Error>(
        graphqlRequestClient
    );
    console.log('user', user);
    console.log('permissions', permissions);

    useEffect(() => {
        console.log('check current session');
        if (error) {
            showError('Your session has been expired, please login again.');
            setTimeout(logout, 2000);
        }
        if (data) {
            console.log('data str', JSON.stringify(data.me!));
            console.log('user str', JSON.stringify(user));
            if (JSON.stringify(data.me!) !== JSON.stringify(user)) {
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
    console.log('permissions', permissions);
    // if (permissions && data) {
    //     permissions.forEach((p: any) => {
    //         const table = p.table;
    //         const mode = p.mode;
    //         if (table === 'ARTICLE' && mode === 'WRITE') {
    //             if (router.pathname.includes('/article/edit')) {
    //                 router.replace('/');
    //                 showError(t('messages:error-permission'));
    //             }
    //         }
    //         if (table === 'BARCODE' && mode === 'READ') {
    //             if (router.pathname.startsWith('/barcode/')) {
    //                 router.replace('/');
    //                 showError(t('messages:error-permission'));
    //             }
    //         }
    //     });
    // }

    // return <>{data ? children : <ContentSpin />}</>;
    return children;
};

ProtectRoute.displayName = 'ProtectRoute';

export { ProtectRoute };
