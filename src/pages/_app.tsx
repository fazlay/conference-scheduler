import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

import { config } from "@fortawesome/fontawesome-svg-core";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-wrapper";

import "../styles/global.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
//import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement, pageProps: AppProps) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div>
      {getLayout(
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>,

        { ...pageProps }
      )}
    </div>
  );
};

export default MyApp;
