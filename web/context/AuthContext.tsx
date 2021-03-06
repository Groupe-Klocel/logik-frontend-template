import {
    cookie,
    decodeJWT,
    OnlyChildrenType,
    showError,
    showSuccess,
    IS_FAKE,
    IS_SAME_SEED
} from '@helpers';
import {
    ChangePasswordMutation,
    ChangePasswordMutationVariables,
    WarehouseLoginMutation,
    WarehouseLoginMutationVariables,
    useWarehouseLoginMutation,
    ResetPasswordMutation,
    ResetPasswordMutationVariables,
    useChangePasswordMutation,
    useResetPasswordMutation
} from 'generated/graphql';
import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

interface IAuthContext {
    isAuthenticated: boolean;
    user?: any;
    login: Function;
    forgotPassword: Function;
    resetPassword: Function;
    loading: boolean;
    logout: Function;
    graphqlRequestClient: any;
}

// refactoring need to typesafe https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
const AuthContext = createContext<IAuthContext>(undefined!);

export const AuthProvider: FC<OnlyChildrenType> = ({ children }: OnlyChildrenType) => {
    const { t } = useTranslation();

    const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string);

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [graphqlRequestClient, setGraphqlRequestClient] = useState(graphqlClient);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(!!user);

    // Get access token from cookies , decode it and set user
    useEffect(() => {
        async function loadUserFromCookie() {
            const token = cookie.get('token');
            if (token) {
                setHeader(token);
                const user = decodeJWT(token);
                if (user) setUser(user);
            }
            setLoading(false);
        }
        loadUserFromCookie();
    }, []);

    const loginMutation = useWarehouseLoginMutation<Error>(graphqlRequestClient, {
        onSuccess: (data: WarehouseLoginMutation, _variables: WarehouseLoginMutationVariables, _context: any) => {
            if (data?.warehouseLogin?.accessToken) {
                const token = data.warehouseLogin.accessToken;
                cookie.set('token', token);
                setHeader(token);
                const user = decodeJWT(token);
                console.log('decoded user = ', user);
                setUser(user);
                setIsAuthenticated(true);
                // Set Bearer JWT token to the header for future request
            } else {
                showError(t('messages:error-login'));
            }
        },
        onError: (error) => {
            showError(t('messages:error-login'));
        }
    });

    const resetMutation = useResetPasswordMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: ResetPasswordMutation,
            _variables: ResetPasswordMutationVariables,
            _context: any
        ) => {
            if (data.resetPassword.__typename === 'ResetPasswordSuccess') {
                showSuccess(data.resetPassword.message);
            } else {
                showError(data.resetPassword.message);
            }
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
            showError(error.message);
        }
    });

    const changePasswordMutation = useChangePasswordMutation<Error>(graphqlRequestClient, {
        onSuccess: (
            data: ChangePasswordMutation,
            _variables: ChangePasswordMutationVariables,
            _context: any
        ) => {
            if (data?.changePassword.__typename === 'ChangePasswordSuccess') {
                showSuccess(data.changePassword.message);
                setTimeout(() => {
                    router.replace('/login');
                }, 1000);
            } else {
                showError(data.changePassword.message);
            }
        },
        onError: (error) => {
            console.log(error);
            showError(error.message);
        }
    });

    const login = async ({
        username,
        password,
        warehouseId = process.env.NEXT_PUBLIC_WAREHOUSE_ID as string
    }: WarehouseLoginMutationVariables) => {
        const { mutate } = loginMutation;
        mutate({ username, password, warehouseId });
    };

    const forgotPassword = async ({
        username,
        callbackUrl,
        warehouseId = process.env.NEXT_PUBLIC_WAREHOUSE_ID
    }: any) => {
        const { mutate } = resetMutation;
        mutate({ email: username, callbackUrl: callbackUrl });
    };

    const resetPassword = async ({
        token,
        password,
        confirmPassword,
        warehouseId = process.env.NEXT_PUBLIC_WAREHOUSE_ID
    }: any) => {
        // alert('RESET PASSWORD CHECK');
        const { mutate } = changePasswordMutation;
        mutate({ token: token, password: password, password2: confirmPassword });
    };

    const logout = () => {
        cookie.remove('token');
        cookie.remove('user');
        cookie.remove('permissions');
        // Remove Bearer JWT token from header
        setHeader('NOP');
        setIsAuthenticated(false);
        setUser(null);
        // router.push('/login');
        router.reload();
    };

    let requestHeader;

    const setHeader = (token: string) => {
        if (IS_FAKE) {
            if (IS_SAME_SEED) {
                requestHeader = {
                    'X-API-fake': 'fake',
                    'X-API-seed': 'same',
                    authorization: `Bearer ${token}`
                };
            } else {
                requestHeader = {
                    'X-API-fake': 'fake',
                    authorization: `Bearer ${token}`
                };
            }
        } else {
            requestHeader = {
                authorization: `Bearer ${token}`
            };
        }

        const graphqlClientWithHeader = new GraphQLClient(
            process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
            {
                headers: requestHeader
            }
        );
        setGraphqlRequestClient(graphqlClientWithHeader);
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                login,
                loading,
                logout,
                graphqlRequestClient,
                forgotPassword,
                resetPassword
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
