import { Html, Head, Main, NextScript } from "next/document";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import { globalStyles } from "@damianveltkamp/dvds";

const HtmlContainer = styled(Html)`
  background-color: #1f2937;
  color: #fff;
`;

export default function Document() {
  return (
    <>
      <Global styles={globalStyles} />
      <HtmlContainer>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />

          <link
            rel="preload"
            href="/fonts/roboto/Roboto-Thin.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/roboto/Roboto-Regular.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/roboto/Roboto-Medium.ttf"
            as="font"
            crossOrigin=""
          />

          <link
            rel="preload"
            href="/fonts/roboto/Roboto-Bold.ttf"
            as="font"
            crossOrigin=""
          />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#1f2937" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </HtmlContainer>
    </>
  );
}
