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
    // const [isAllowed, setIsAllowed] = useState(true);
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

        // function checkPagePermission(table: any, path: string) {
        //     console.log('checkpagePermission => table', table, 'path', path);
        //     const p = permissions.find((p: any) => {
        //         return p.table == table;
        //     });
        //     if (!p) {
        //         let isUrlPatternExist = false;
        //         isUrlPatternExist = router.pathname.startsWith('/about') || router.pathname === '/';
        //         if (!isUrlPatternExist) {
        //             showError(t('messages:error-permission'));
        //             setIsAllowed(false);
        //             router.replace('/');
        //         }
        //     } else {
        //         const mode = p.mode;
        //         if (mode == Mode.Read) {
        //             if (router.pathname.startsWith(path)) {
        //                 showError(t('messages:error-permission'));
        //                 setIsAllowed(false);
        //                 router.replace('/');
        //             }
        //         }
        //     }
        // }
        // console.log('pathanem = ', router.pathname);
        // if (permissions) {
        //     // const tableNames = Object.values(Table);
        //     let tableName = '';

        //     if (router.pathname.includes('/article')) {
        //         tableName = 'ARTICLE';
        //         checkPagePermission(tableName, '/article/');
        //     } else if (router.pathname.includes('/barcode')) {
        //         tableName = 'BARCODE';
        //         checkPagePermission(tableName, '/barcode/');
        //     }
        // }
    }, []);
    let isAllowed = true;
    function checkPagePermission(table: any, path: string) {
        console.log('checkpagePermission => table', table, 'path', path);
        const p = permissions.find((p: any) => {
            return p.table == table;
        });
        if (!p) {
            let isUrlPatternExist = false;
            isUrlPatternExist = router.pathname.startsWith('/about') || router.pathname === '/';
            if (!isUrlPatternExist) {
                // setIsAllowed(false);
                isAllowed = false;
                router.replace('/');
                showError(t('messages:error-permission'));
            }
        } else {
            const mode = p.mode;
            if (mode == Mode.Read) {
                if (router.pathname.startsWith(path)) {
                    showError(t('messages:error-permission'));
                    // setIsAllowed(false);
                    isAllowed = false;
                    router.replace('/');
                }
            }
        }
    }
    if (permissions) {
        // const tableNames = Object.values(Table);
        let tableName = '';

        if (router.pathname.includes('/article')) {
            tableName = 'ARTICLE';
            checkPagePermission(tableName, '/article/');
        } else if (router.pathname.includes('/barcode')) {
            tableName = 'BARCODE';
            checkPagePermission(tableName, '/barcode/');
        }
    }
    useEffect(() => {
        console.log('router useeffect, ', router.pathname);
    }, [router]);

    console.log('isAllowed', isAllowed);
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
