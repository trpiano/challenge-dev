import { AppProps } from 'next/app'

import { Toaster } from 'react-hot-toast';

import { AppContextProvider } from "../context/AppContext";

import { GlobalStyle } from '../styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
        <Toaster />
      </AppContextProvider>
    </>
  )
}

export default MyApp
