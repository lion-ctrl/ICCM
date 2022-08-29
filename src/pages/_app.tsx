/// <reference types="styled-jsx" />
import type { AppProps } from 'next/app';
import globalStyles from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}

export default MyApp;
