import { META_DEFAULTS } from 'helpers/configs/misc';
import { cookie, getDefaultTheme, showError } from '@helpers';
import 'antd/dist/antd.css';
import { AppProvider, useAppState } from 'context/AppContext';
import { AuthProvider, useAuth } from 'context/AuthContext';
import { PageWithMainLayoutType } from 'helpers/types/pageWithLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../styles/globals.css';
import useTranslation from 'next-translate/useTranslation';
import HomePage from 'pages';
import { Mode, Table } from 'generated/graphql';

const themes = {
    dark: `/dark-theme.css`,
    light: `/light-theme.css`
};

// Query should not invalidate until 5 secs
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 1000
        }
    }
});

type AppLayoutProps = AppProps & {
    Component: PageWithMainLayoutType;
};

const App = ({ Component, pageProps }: AppLayoutProps) => {
    const router = useRouter();
    const { locale } = router;
    const { permissions } = useAppState();
    const { t } = useTranslation();
    const [isAllowed, setIsAllowed] = useState(true);

    let insertPoint;

    const getLayout = Component.getLayout ?? ((page) => page);
    const Layout = Component.layout ?? Fragment;

    useEffect(() => {
        if (locale) {
            cookie.set('NEXT_LOCALE', locale);
            router.push(router.asPath, router.asPath, { locale: locale });
        }
        if (typeof window !== 'undefined')
            insertPoint = document.getElementById('inject-styles-here');
        function disallowPage() {
            showError(t('messages:error-permission'));
            router.replace('/');
            setIsAllowed(false);
        }
        console.log('pathanem = ', router.pathname);
        if (permissions) {
            const tableNames = Object.values(Table);
            for (const key of tableNames) {
                // const tableName = Table[key];
                console.log(key);
                const p = permissions.find((p: any) => {
                    return p.table == key;
                });
                console.log(p);
                if (!p) {
                    let isUrlPatternExist = false;
                    isUrlPatternExist =
                        router.pathname.startsWith('/about') || router.pathname === '/';
                    if (!isUrlPatternExist) {
                        disallowPage();
                        break;
                    }
                } else {
                    const table = p.table;
                    const mode = p.mode;

                    let isUrlPatternExist = false;

                    // this switch statement used only for URL pattern check for the READ permission
                    switch (table) {
                        case Table.Article:
                            isUrlPatternExist = router.pathname.includes('/article/edit');
                            break;
                        case Table.Barcode:
                            isUrlPatternExist = router.pathname.includes('/barcode/edit');
                            break;
                        case Table.Organization:
                            isUrlPatternExist = router.pathname.includes('/organization/edit');
                            break;
                        case Table.Permission:
                            isUrlPatternExist = router.pathname.includes('/permission/edit');
                            break;
                        case Table.User:
                            isUrlPatternExist = router.pathname.includes('/user/edit');
                            break;
                        default:
                            isUrlPatternExist = false;
                    }
                    if (isUrlPatternExist && mode === Mode.Read) {
                        router.replace('/');
                        showError(t('messages:error-permission'));
                        setIsAllowed(false);
                        break;
                    }
                }
            }
            // permissions.forEach((p: any) => {
            //     const table = p.table;
            //     const mode = p.mode;
            //     let isUrlPatternExist = false;

            //     switch (table) {
            //         case Table.Article:
            //             isUrlPatternExist = router.pathname.includes('/article/edit');
            //             break;
            //         case Table.Barcode:
            //             isUrlPatternExist = router.pathname.includes('/article/edit');
            //             break;
            //         case Table.Organization:
            //             isUrlPatternExist = router.pathname.includes('/article/edit');
            //             break;
            //         case Table.Permission:
            //             isUrlPatternExist = router.pathname.includes('/article/edit');
            //             break;
            //         case Table.User:
            //             isUrlPatternExist = router.pathname.includes('/article/edit');
            //             break;
            //         default:
            //             isUrlPatternExist = false;
            //     }
            //     if (isUrlPatternExist && mode === Mode.Read) {
            //         router.replace('/');
            //         showError(t('messages:error-permission'));
            //         setIsAllowed(false);
            //     }
            // });
        }
    }, []);
    const ComponentToRender = isAllowed ? Component : HomePage;

    return (
        <>
            <Head>
                <title>{`${META_DEFAULTS.title} | ${META_DEFAULTS.description}`}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5"
                />
            </Head>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <ThemeSwitcherProvider
                        defaultTheme={getDefaultTheme()}
                        themeMap={themes}
                        insertionPoint={insertPoint}
                    >
                        <AppProvider>
                            <Layout>{getLayout(<ComponentToRender {...pageProps} />)}</Layout>
                        </AppProvider>
                    </ThemeSwitcherProvider>
                </AuthProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default App;
