import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { useSSR } from "@nextui-org/react";
import { AuthProvider } from "@/components/AuthContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <NextUIProvider>
        <AuthProvider>
          <Component {...pageProps} />
          <Head>
            <title>
              KamayaKya - SEBI Registered Research Analyst | Expert Microcap &
              Smallcap Stock Picks
            </title>
            <meta
              name="og:title"
              content="KamayaKya - SEBI Registered Research Analyst | Expert Microcap &
              Smallcap Stock Picks"
            />
            <meta
              name="description"
              content="KamayaKya is your friendly investment guru who will assist you in finding the best SME, MicroCap and SmallCap stocks to invest, backed by solid research."
            />
            <meta
              name="og:description"
              content="KamayaKya is your friendly investment guru who will assist you in finding the best SME, MicroCap and SmallCap stocks to invest, backed by solid research."
            />
            <link
              rel="icon"
              // type="image/png"
              href="/kamayaKya-website-favicon-white-bordered.ico"
              sizes="any"
            />
            {/*<link*/}
            {/*  rel="icon"*/}
            {/*  type="image/svg+xml"*/}
            {/*  href="/kamayaKya-website-favicon-white-bordered.svg"*/}
            {/*  sizes="any"*/}
            {/*/>*/}
            <link rel="preload" href="/src/styles/globals.css" as="style" />
            <link rel="stylesheet" href="/src/styles/globals.css" />

            {/* Hotjar */}
            {/*<script>*/}
            {/*  (function(h,o,t,j,a,r){*/}
            {/*  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};*/}
            {/*  h._hjSettings={hjid:3565907,hjsv:6};*/}
            {/*  a=o.getElementsByTagName('head')[0];*/}
            {/*  r=o.createElement('script');r.async=1;*/}
            {/*  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;*/}
            {/*  a.appendChild(r);*/}
            {/*})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');*/}
            {/*</script>*/}

            {/* Google Tag Manager */}
            <script
              src="https://www.googletagmanager.com/gtag/js?id=G-PBMR9CBK3J"
              data-nscript="afterInteractive"
            ></script>
          </Head>
        </AuthProvider>
      </NextUIProvider>
    )
  );
}

export default MyApp;