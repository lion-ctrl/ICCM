// react
import React from 'react';
import Head from 'next/head';
// components
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>ICCM - Iglesia Cristiana Central de Maracaibo</title>
        <meta
          name="description"
          content="iglesia cristiana para formar Hombres y mujeres maduros, capaces de enseñar e implantar la palabra de Dios y que estos Produzcan Cambios."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
