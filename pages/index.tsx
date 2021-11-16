import React from "react"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {IntroView, MobileIntroView } from "../components/IntroView/introview";
import Mission from '../components/mission';
import Content from '../components/content';
import ContactForm from '../components/ContactForm/contactform';
import Footer from '../components/footer';
import Typed from 'react-typed';
import styles from './index.module.scss';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Choose from "../components/choose";

const WeCreate = () => {
  return(        
  <section className="section">
    <div className="container ">
      <div className="is-flex is-justify-content-center" style={{paddingTop: '15vh', paddingBottom: '20vh'}}>
        <div style={{marginBottom: 'auto'}}>
          <div className={styles.wecraft}>
            <div>
              <h2>we craft<br/>beautiful websites</h2>
              <p>that showcase our clients&apos; passion for what they do, and create captivating experiences for their customers.</p>
              <br />
              <Link href="/#ourprocess"><a className="is-size-4">See how we do it →</a></Link>
            </div>
          </div>
        </div>
        <div className="is-flex is-justify-content-flex-end" style={{marginTop: 180, textAlign: 'right'}}>
          <Link href="/portfolio" passHref>
            <div className={styles.projects}>
              <h1>latest<br/>projects</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </section>)
}


export function Index(props:any) {
  const [hoverState, setHoverState] = useState(0);
  const [name, setName] = useState("" as string);
  const [typeComplete, setTypeComplete] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
 
  const handleHover = (num: number) => {
    setHoverState(num)
  }

  const handleMouseLeave = () => {
    setHoverState(0);
  }

  useEffect(() => {
    if(props.isMobile) setTypeComplete(true);
  }, [])
  
  const returnBgClass = () => {
    if(!props.isMobile){
      switch(hoverState){
        case 1:
          return styles.adventure1
        case 2:
          return styles.adventure2
        case 3: 
          return styles.adventure3
        default:
          return " "
      }
    }
  }

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  }

  const liftName = (name:string) => {
    setName(name);
    setTypeComplete(true);
  }

  const getMobileBg = () => {
    switch(hoverState){
      case 1:
        return "/presence-3-mobile.webp"
      case 2:
        return "/experience-4-mobile.webp"
      case 3: 
        return "/leverage-2-mobile.webp"
      default:
        return '/null_bg_mobile.webp'
    }
  }

  return (
    <>
      <Head>
        <title>WEBPRISM | A Passion-driven Creative Agency</title>
        <meta name="title" content="WebPrism | A Passion Driven Creative Agency" />
        <meta name="description" content="WebPrism is a digital creative agency that helps organizations build engaging digital experiences. Our team works with clients as true partners, helping them formulate their vision and mission, then adopting that mission as our own. The result? Beautiful websites and apps we're proud to share with the world." />
      </Head>
      {props.isMobile && <div style={{position: 'fixed', top: 0, left: 0, height: '100%', width: '100%', zIndex: -1}}>
        <Image src={getMobileBg()} layout="fill" objectFit="fill" alt="decorative" />
      </div>}
      <div className={`${styles.page_container} ${hoverState !== 0 && returnBgClass()} ${hoverState === 0 && styles.stars}`}>
        {props.isMobile ? <MobileIntroView liftName={liftName}/> : <IntroView typeComplete={() => setTypeComplete(true)} liftName={liftName}/>}
        {typeComplete && <>
        <WeCreate />
        <Choose />
        <Mission name={name}/>
        <Content fullheight>
                  <div className={styles.contactFormContainer} >
                    {!formSubmitted && <>
                      <p className="title is-1">Let&apos;s talk</p>
                      <p className="is-size-3 block">What can we build together?</p>
                    </>}
                    {formSubmitted &&
                      <Typed 
                        strings={[`${name}, you're awesome!`]}
                        typeSpeed={40}
                        showCursor={false}
                        className="title is-1"
                      />
                    }
                    <ContactForm name={name} handleFormSubmit={handleFormSubmit}/>
                  </div>
        </Content>
        <Footer />
        </>}
        <Script strategy="lazyOnload" src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      </div>
    </>
  );
}

export default Index;

export const getServerSideProps = (context:any) => {
  let userAgent;

  if(context.req){
    userAgent = context.req.headers['user-agent'];

    let isMobile = Boolean(userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))

    return {
      props: {
        isMobile: isMobile ? true : false
      }
    }    
  }
}