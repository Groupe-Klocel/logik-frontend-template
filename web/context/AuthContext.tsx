import {
    cookie,
    decodeJWT,
    OnlyChildrenType,
    showError,
    showSuccess,
    IS_FAKE,
    IS_SAME_SEED
} from '@helpers';
import { LoginMutation, LoginMutationVariables, useLoginMutation } from 'generated/graphql';
import { GraphQLClient } from 'graphql-request';
import { useRouter } from 'next/router';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

interface IAuthContext {
    isAuthenticated: boolean;
    user?: any;
    login: Function;
    loading: boolean;
    logout: Function;
    graphqlRequestClient: any;
}

// refactoring need to typesafe https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
const AuthContext = createContext<IAuthContext>(undefined!);

export const AuthProvider: FC<OnlyChildrenType> = ({ children }: OnlyChildrenType) => {
    let { t } = useTranslation();

    const graphqlClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string);

    const router = useRouter();
    const [user, setUser] = useState(null);
    const [graphqlRequestClient, setGraphqlRequestClient] = useState(graphqlClient);
    const [loading, setLoading] = useState(true);

    // Get access token from cookies , decode it and set user
    useEffect(() => {
        async function loadUserFromCookie() {
            const token = cookie.get('token');
            if (token) {
                await setHeader(token);
                const user = decodeJWT(token);
                if (user) setUser(user);
            }
            setLoading(false);
        }
        loadUserFromCookie();
    }, []);

    const { mutate } = useLoginMutation<Error>(graphqlRequestClient, {
        onSuccess: (data: LoginMutation, _variables: LoginMutationVariables, _context: unknown) => {
            if (data?.login?.accessToken) {
                cookie.set('token', data.login.accessToken);
                // Set Bearer JWT token to the header for future request
                setHeader(data.login.accessToken);
                const user = decodeJWT(data.login.accessToken);
                setUser(user);
                router.push('/');
                showSuccess(t('messages:login-success'));
            }
        },
        onError: (error) => {
            showError('messages:error-login');
        }
    });

    const login = async ({ username, password, warehouseId = 'demo' }: LoginMutationVariables) => {
        mutate({ username, password, warehouseId });
    };

    const logout = () => {
        cookie.remove('token');
        setUser(null);
        // Remove Bearer JWT token from header
        setHeader('NOP');
        router.push('/login');
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
            value={{ isAuthenticated: !!user, user, login, loading, logout, graphqlRequestClient }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
