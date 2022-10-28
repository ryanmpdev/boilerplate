import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut" href="/img/icon-512" />
        <link rel="apple-touch-icon" href="/img/icon-512" />
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple starter to work with TypeScript, React, NextJS and style components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
