import "../styles/globals.css";
import "../styles/styles.scss";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div className="pt-20">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
