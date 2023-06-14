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
							name="description"
							content="KamayaKya is your friendly investment guru who will assist you in finding the best SME, MicroCap and SmallCap stocks to invest, backed by solid research."
						/>
					</Head>
				</AuthProvider>
			</NextUIProvider>
		)
	);
}

export default MyApp;
