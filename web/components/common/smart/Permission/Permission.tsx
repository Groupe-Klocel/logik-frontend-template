import { ScreenSpin } from '@components';
import { cookie, OnlyChildrenType, showError } from '@helpers';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import { GetMyInfoQuery, Mode, useGetMyInfoQuery } from 'generated/graphql';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppState } from 'context/AppContext';
import useTranslation from 'next-translate/useTranslation';
import { ContentSpin } from 'components/common/dumb/Spinners/ContentSpin';
import { GraphQLClient } from 'graphql-request';
import { PermissionTable } from 'helpers/constants';

const Permission: any | null = ({ children }: OnlyChildrenType) => {
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

    // let isAllowed = true;
    const [isAllowed, setIsAllowed] = useState<boolean | undefined>(undefined);
    useEffect(() => {
        function disallowPage() {
            showError(t('messages:error-permission'));
            setIsAllowed(false);
            // isAllowed = false;
            router.replace('/');
            setTimeout(() => setIsAllowed(true), 1000);
        }

        if (permissions) {
            PermissionTable.forEach((p: any) => {
                const per = permissions.find((per: any) => {
                    return per.table == p.tableName;
                });
                console.log('permission = ', per);
                if (per) {
                    if (per.mode == Mode.Read) {
                        const urlPatterns = p.writeModeUrls;
                        urlPatterns.forEach((url: string) => {
                            if (router.pathname.startsWith(url)) disallowPage();
                        });
                    } else {
                        setIsAllowed(true);
                    }
                } else {
                    const urlPatterns = p.nonePermissionUrls;
                    urlPatterns.forEach((url: string) => {
                        if (router.pathname.startsWith(url)) disallowPage();
                        else setIsAllowed(true);
                    });
                }
            });
        } else {
            console.log('permission does not exist =========>');
            setIsAllowed(true);
        }
    }, []);
    if (isAllowed == undefined) {
        return <ScreenSpin></ScreenSpin>;
    } else if (isAllowed == false) {
        router.push('/');
        return <ScreenSpin></ScreenSpin>;
    } else {
        return children;
    }
};

Permission.displayName = 'Permission';

export { Permission };
