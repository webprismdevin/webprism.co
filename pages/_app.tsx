import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
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
import Tawk from "@/components/tawk";

const NavBar = dynamic(() => import("@/components/NavBar"), { ssr: false});
const MailingList = dynamic(() => import("@/components/MailingList"));
const Footer = dynamic(() => import("../components/Footer"));

declare global {
  interface Window {
    fun: any;
  }
}

//readd gtm as a script

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
        {/* <Footer /> */}
        {/* <MailingList /> */}
        <ColorModeScript initialColorMode={customTheme.initialColorMode} />
      </ChakraProvider>
      {/* <Tawk src="https://embed.tawk.to/621c6ef8a34c24564128a29d/1fsvh2ugc" /> */}
    </>
  );
}

export default CustomApp;
