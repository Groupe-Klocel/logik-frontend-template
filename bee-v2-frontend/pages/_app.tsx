import { META_DEFAULTS } from '@configs/misc'
import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/globals.css'

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {

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
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App
