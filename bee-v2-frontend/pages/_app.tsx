import { META_DEFAULTS } from '@configs/misc'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme'
import { PageWithMainLayoutType } from 'helpers/types/pageWithLayout'
import { AppWrapper } from "helpers/context/AppContext";
import { ThemeSwitcherProvider, useThemeSwitcher } from "react-css-theme-switcher";

const themes = {
  dark: `/dark-theme.css`,
  light: `/light-theme.css`,
};

const queryClient = new QueryClient();

type AppLayoutProps = AppProps & {
  Component: PageWithMainLayoutType
}


const App = ({ Component, pageProps }: AppLayoutProps) => {

  const getLayout = Component.getLayout ?? (page => page)
  const Layout = Component.layout ?? Fragment

  return (
    <>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="LIGHT">
        <Head>
          <title>{`${META_DEFAULTS.title} | ${META_DEFAULTS.description}`}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5"
          />
        </Head>
        <QueryClientProvider client={queryClient}>
          <div className={`theme-dark`}>
            <AppWrapper>
              <Layout>
                {getLayout(<Component {...pageProps} />)}
              </Layout>
            </AppWrapper>
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeSwitcherProvider>

    </>
  )
}

export default App
