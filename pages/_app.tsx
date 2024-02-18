import { useEffect } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.documentElement.lang = 'en' // Replace 'en' with the desired language code
  }, [])

  return <Component {...pageProps} />
}

export default App
