import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { push as Menu } from 'react-burger-menu'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import $ from 'jquery/dist/jquery.slim';
import './styles.scss';

declare global {
  interface Window {
    fun: any,
  }
}

function CustomApp({ Component, pageProps }: AppProps) {
  const [window, setWindow] = useState(null);

  useEffect(() => {
    if(typeof window !== undefined){
      setWindow(window)
    }
  }, []);

  useEffect(() => {
    const fun = function fun(e:MouseEvent){ 
      setTimeout(() => {
          e = e || {}; const $img = $('<div class="joy"></div>')
          .css({position: 'fixed', width: 100,
            top: (e.y || e.clientY) - 50,
            left: (e.x || e.clientX || e.pageX) - 50,
            transform: 'rotate('+(Math.random() * 360)+'deg)'
          })
          .appendTo('body');
          
          setTimeout(() => { $img.remove() },800);

    },10)};

    $("body").on('touchstart' as any, fun).on('mousedown' as any, fun);
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#03040A" />
        <meta name="description" content="However you got here, we look forward to connecting with you, hearing you, and buidling something incredible." />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.webprism.co/" />
        <meta property="og:title" content="WebPrism | A Passion Driven Creative Agency" />
        <meta property="og:description" content="WebPrism is a digital creative agency that helps organizations build engaging digital experiences. Our team works with clients as true partners, helping them formulate their vision and mission, then adopting that mission as our own. The result? Beautiful websites and apps we're proud to share with the world." />
        <meta property="og:image" content="https://www.webprism.co/open-graph-thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.webprism.co/" />
        <meta property="twitter:title" content="WebPrism | A Passion Driven Creative Agency" />
        <meta property="twitter:description" content="WebPrism is a digital creative agency that helps organizations build engaging digital experiences. Our team works with clients as true partners, helping them formulate their vision and mission, then adopting that mission as our own. The result? Beautiful websites and apps we're proud to share with the world." />
        <meta property="twitter:image" content="https://www.webprism.co/open-graph-thumbnail.png" />
      </Head>
      <div className="app" id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
            <div><Link href="/"><a id="home" className="menu-item is-size-4">Home</a></Link></div>
            <div><Link href="/contact"><a id="contact" className="menu-item is-size-4">Contact</a></Link></div>
            <div>More. Soon...</div>
        </Menu>
        <main id="page-wrap">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
