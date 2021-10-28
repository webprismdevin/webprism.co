import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import Head from 'next/head';
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
  }, [])

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
      </Head>
      <div className="app" id="outer-container">
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right>
            <div><Link href="/"><a id="home" className="menu-item is-size-4">Home</a></Link></div>
            {/* <div><Link href="/nextgen"><a id="nexgen" className="menu-item is-size-4" >Web3</a></Link></div> */}
            <div><Link href="/contact"><a id="contact" className="menu-item is-size-4">Contact</a></Link></div>
        </Menu>
        <main id="page-wrap">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
