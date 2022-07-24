import Head from "next/head";
import Banner from "@/components/Global/Banner";
import customTheme from "@/lib/theme";
import FootNav from "@/components/Global/FootNav";
import useSWR from "swr";
import NextScript from 'next/script';
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

const groqFetcher = (query: any) => sanity.fetch(query, {});

function CustomApp({ Component, pageProps }: AppProps) {
  const { colorMode } = useColorMode();
  const { data, error } = useSWR(`*[_type == "siteSettings"][0]`, groqFetcher, {
    refreshInterval: 60,
  });

  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            name="theme-color"
            content="#131a24"
          />
        </Head>
        <Banner data={data} />
        <main>
          <Component {...pageProps} />
        </main>
        <FootNav data={data} />
        <ColorModeScript initialColorMode={customTheme.initialColorMode} />
      </ChakraProvider>
      {process.env.NODE_ENV === "production" && (
        <NextScript
          id="segment"
          dangerouslySetInnerHTML={{
            __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="YOUR_WRITE_KEY";analytics.SNIPPET_VERSION="4.15.2";
          analytics.load("pY5WgoDP09niot4j8hMVyCkwnp4qy0dz");
          analytics.page();
          }}();`,
          }}
        />
      )}
    </>
  );
}

export default CustomApp;
