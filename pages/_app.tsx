import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import TagManager from "react-gtm-module";
import $ from "jquery/dist/jquery.slim";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeadContent } from "@/components/head-content";
import dynamic from "next/dynamic";
import customTheme from "@/lib/theme";
import { ColorModeScript } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@/styles/styles.scss";
import NextScript from "next/script";

const NavBar = dynamic(() => import("@/components/NavBar"));
const MailingList = dynamic(() => import("@/components/MailingList"));
const Footer = dynamic(() => import("../components/NewFooter"));

declare global {
  interface Window {
    fun: any;
  }
}

// const tagManagerArgs = {
//   gtmId: "GTM-NZ2DFK5",
// };

// if (process.env.NODE_ENV === "production" && process.browser) {
//   console.log("GTM fired");
//   TagManager.initialize(tagManagerArgs);
// } else {
//   console.log("GTM not fired");
// } 6 56

function CustomApp({ Component, pageProps }: AppProps) {
  const [window, setWindow] = useState(null);
  const router = useRouter();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (typeof window !== undefined) {
      setWindow(window);
    }
  }, []);

  useEffect(() => {
    const fun = function fun(e: MouseEvent) {
      setTimeout(() => {
        e = e || {};
        const $img = $('<div class="joy"></div>')
          .css({
            position: "fixed",
            width: 100,
            top: (e.y || e.clientY) - 50,
            left: (e.x || e.clientX || e.pageX) - 50,
            transform: "rotate(" + Math.random() * 360 + "deg)",
          })
          .appendTo("body");

        setTimeout(() => {
          $img.remove();
        }, 800);
      }, 10);
    };

    if (process.env.NODE_ENV !== "development") {
      $("body")
        .on("touchstart" as any, fun)
        .on("mousedown" as any, fun);
    }
  }, []);

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
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <MailingList />
        <ColorModeScript initialColorMode={customTheme.initialColorMode} />
      </ChakraProvider>
      <NextScript 
        id="segment"
        dangerouslySetInnerHTML={{
          __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="YOUR_WRITE_KEY";analytics.SNIPPET_VERSION="4.15.2";
          analytics.load("pY5WgoDP09niot4j8hMVyCkwnp4qy0dz");
          analytics.page();
          }}();`
        }}
      />
    </>
  );
}

export default CustomApp;
