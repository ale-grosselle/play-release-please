import '../styles/global.css';
import { AppProps } from 'next/app';

console.log("WOWWW HELLO FROM _app.tsx");
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
