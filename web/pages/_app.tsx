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
import { PermissionTable } from 'helpers/constants';

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
    // const [isAllowed, setIsAllowed] = useState(false);
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
    }, []);

    function disallowPage() {
        showError(t('messages:error-permission'));
        // setIsAllowed(false);
        isAllowed = false;
        router.replace('/');
        // setTimeout(() => setIsAllowed(true), 2000);
    }

    let isAllowed = true;

    if (permissions) {
        let tableName = '';

        if (router.pathname.includes('article')) {
            tableName = 'ARTICLE';
        } else if (router.pathname.includes('barcode')) {
            tableName = 'BARCODE';
        }

        const p = PermissionTable.find((e: any) => {
            return e.tableName == tableName;
        });
        if (p) {
            const per = permissions.find((per: any) => {
                return per.table == p.tableName;
            });
            // console.log('permission = ', per);
            if (per) {
                if (per.mode == Mode.Read) {
                    const urlPatterns = p.writeModeUrls;
                    const isPatternExist = urlPatterns.find((pattern: string) => {
                        return router.pathname.startsWith(pattern);
                    });
                    if (isPatternExist) disallowPage();
                } else {
                    // setIsAllowed(true);
                    isAllowed = true;
                }
            } else {
                console.log('user has no permission for table ', p.tableName);
                const urlPatterns = p.nonePermissionUrls;
                const isPatternExist = urlPatterns.find((pattern: string) => {
                    return router.pathname.startsWith(pattern);
                });
                if (isPatternExist) disallowPage();
            }
        }
    } else {
        // console.log('permission does not exist');
        // setIsAllowed(true);
        isAllowed = true;
    }
    console.log('route=', router.pathname, 'isAllowed=', isAllowed);
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
