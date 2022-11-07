import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Container } from "@/utils/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BlockTown</title>
        <meta name="description" content="Town Budgeting App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </>
  );
}
