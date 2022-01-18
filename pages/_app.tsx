import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import TagManager from "react-gtm-module";
import $ from "jquery/dist/jquery.slim";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HeadContent } from "@/components/head-content";
import dynamic from "next/dynamic";
import "@fontsource/montserrat";
import "@/styles/styles.scss";
import customTheme from '@/lib/theme';

const NavBar = dynamic(() => import("@/components/NavBar"));
const MailingList = dynamic(() => import("@/components/MailingList"));
const Footer = dynamic(() => import("../components/NewFooter"));

declare global {
  interface Window {
    fun: any;
  }
}

const tagManagerArgs = {
  gtmId: "GTM-NZ2DFK5",
};

if (process.env.NODE_ENV === "production" && process.browser) {
  console.log("GTM fired");
  TagManager.initialize(tagManagerArgs);
} else {
  console.log("GTM not fired");
}

function CustomApp({ Component, pageProps }: AppProps) {
  const [window, setWindow] = useState(null);
  const router = useRouter();

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
      <Head>
        <HeadContent />
      </Head>
      <ChakraProvider theme={customTheme}>
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <MailingList />
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
