import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider, createTheme} from '@nextui-org/react';
import { useSSR } from '@nextui-org/react'
function MyApp({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR()
  return (
    isBrowser && (
    <NextUIProvider >
      <Component {...pageProps} />
    </NextUIProvider>
    )
  )
}

export default MyApp