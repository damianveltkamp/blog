import type { AppProps } from "next/app";
import { BaseLayout } from "../src/templates/BaseLayout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@damianveltkamp/dvds";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
