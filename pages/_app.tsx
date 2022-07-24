import Head from "next/head";
import Banner from "@/components/Global/Banner";
import customTheme from "@/lib/theme";
import FootNav from "@/components/Global/FootNav";
import useSWR from "swr";
import { AppProps } from "next/app";
import { sanity } from "../lib/sanity";
import { ColorModeScript } from "@chakra-ui/react";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { HeadContent } from "@/components/Global/head-content";

declare global {
  interface Window {
    fun: any;
  }
}

//readd gtm as a script

const groqFetcher = (query: any) => sanity.fetch(query, {});

function CustomApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const { data, error } = useSWR(`*[_type == "siteSettings"][0]`, groqFetcher, { refreshInterval: 60 } )


  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Head>
          <HeadContent />
          <meta
            name="theme-color"
            content={colorMode === "dark" ? "brand.dark" : "brand.light"}
          />
        </Head>
        {/* <NavBar /> */}
        <Banner data={data} />
        <main>
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
        <FootNav data={data} />
        <ColorModeScript initialColorMode={customTheme.initialColorMode} />
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
