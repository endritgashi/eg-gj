import '../styles/index.css';
import { FC } from 'react'
import { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <div><Component {...pageProps} /></div>
}

export default MyApp
