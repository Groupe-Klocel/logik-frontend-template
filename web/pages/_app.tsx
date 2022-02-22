import { META_DEFAULTS } from '@configs/misc';
import { cookie, getDefaultTheme } from '@helpers';
import 'antd/dist/antd.css';
import { AppProvider } from 'context/AppContext';
import { AuthProvider } from 'context/AuthContext';
import { PageWithMainLayoutType } from 'helpers/types/pageWithLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import '../styles/globals.css';

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
                            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
                        </AppProvider>
                    </ThemeSwitcherProvider>
                </AuthProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
};

export default App;
