import '../styles/globals.css'
import ResponsiveNav from '../components/ResponsiveNav'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ResponsiveNav />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
