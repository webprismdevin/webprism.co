import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { push as Menu } from 'react-burger-menu'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module'
import $ from 'jquery/dist/jquery.slim';
import './styles.scss';

declare global {
  interface Window {
    fun: any,
  }
}

const tagManagerArgs = {
  gtmId: 'GTM-NZ2DFK5'
}

if(process.env.NODE_ENV === 'production' && process.browser){
  console.log("GTM fired");
  TagManager.initialize(tagManagerArgs);
}
else {
  console.log("GTM not fired");
}

function CustomApp({ Component, pageProps }: AppProps) {
  const [window, setWindow] = useState(null);
  const [isOpen, handleOnOpen] = useState(false);
  const router = useRouter();

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
  }, []);

  useEffect(() => {
    //@ts-ignore
    const handleRouteChange = () => {
      handleOnOpen(false);
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#03040A" />
        
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
        <Link href="/" passHref><div className="is-clickable" style={{position: 'fixed', zIndex: 998, top: 30, left: '1.5em'}}><Image src="/webprism-diamond-white.png" alt="WEBPRISM logo" width={36} height={36} /></div></Link>
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right isOpen={isOpen} onOpen={() => handleOnOpen(!isOpen)} onClose={() => handleOnOpen(!isOpen)}>
            <div>
              <Link href="/"><a id="home" className="menu-item is-size-4">Home</a></Link>
              
            </div>
            <hr />
            <div>
              <Link href="https://mvp.webprism.co"><a id="mvp" className="menu-item is-size-4">M | V | P</a></Link>
              <div>Define Your Mission, Vision + Purpose</div>
            </div>
            <hr />
            <div>
              <Link href="/portfolio"><a id="portfolio" className="menu-item is-size-4">Portfolio</a></Link>
              <div>We love to create. Come check it out.</div>
            </div>
            <hr />
            <div>
              <Link href="/posts"><a id="blog" className="menu-item is-size-4">Blog</a></Link>
              <div>Come gather &apos;round our soap box.</div>
            </div>
            <hr />
            <div>
              <Link href="/contact"><a id="contact" className="menu-item is-size-4">Contact</a></Link>
              
            </div>
            <hr />
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
