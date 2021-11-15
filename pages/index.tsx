import React from "react"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {IntroView, MobileIntroView } from "../components/IntroView/introview";
import Mission from '../components/mission';
import Footer from '../components/footer';
import Projects from '../components/projects';
import Content from '../components/content';
import Adventures from "../components/adventures";
import ContactForm from '../components/ContactForm/contactform';
import Typed from 'react-typed';
import styles from './index.module.scss';
import Script from 'next/script';
import Image from 'next/image';

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
        <section className="section">
          <div className="container" style={{paddingTop: '30vh', paddingBottom: '30vh'}}>
            <div className="is-vcentered" style={{maxWidth: 600}}>
              <div className="p-6" style={{boxShadow: '12px 12px 18px #FD2187', border: '2px solid white'}}>
                  <h2 className="title is-2">We&apos;re passionate about<br/> passionate people.</h2>
                  <p className="title is-size-4">We craft beautiful websites that showcase our clients&apos; passion for what they do, and create captivating experiences for their customers.</p>
              </div>
            </div>
          </div>
        </section>
        <Adventures name={name} hoverState={hoverState} handleHover={handleHover} handleMouseLeave={handleMouseLeave} isMobile={props.isMobile}/>
        <Mission name={name}/>
        <Projects />
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
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      </div>
    </>
  );
}

// const getDescription = (hoverState: number, isMobile?: boolean) => {
//   switch(hoverState){
//     case 1:
//       return <>{isMobile && <h2 style={{color: 'white'}}>Create Presence</h2>}
//         It&apos;s not just a website. You&apos;re little corner of the internet also serves as a digital business card, a communication platform, a marketing hub, and a portal for customers to connect and interact with you. We&apos;ll help you put your best foot (and face) forward.</>
//     case 2: 
//       return <>{isMobile && <h2 style={{color: 'white'}}>Build Experiences</h2>}
//         Connect with your customers on a deeper level by creating a memorable digital experience. An engaging experience will increase interactions with current and potential customers and open new ways to further your mission and deliver more value to the world.</>
//     case 3:
//       return <>{isMobile && <h2 style={{color: 'white'}}>Expand + Grow</h2>}
//         We&apos;ve built something together. Maybe we&apos;ve started to feel like part of your team. Using the knowledge we&apos;re gained from working together, we&apos;ll help you leverage this new digital marketing platform into growth and expansion in the next phase of your adventure.</>
//     case 4:
//       return <></>
//     default: 
//       return <>{isMobile ? "Tap": "Hover"} to learn more</>
//   }
// }

// const Adventures = (props:any) => {
//   return(<section className={`section ${styles.adventureContainer}`}>
//             <div className={`${styles.wheretostart} container`}>
//               <div className="title is-1">Choose your adventure{props.name && ", "}{props.name} 🚀</div>
//             </div>
//             <div className={`container ${styles.pickAdventure}`}>
//                   <div
//                     className={`${styles.adventure} ${styles.adventure1}`} 
//                     onMouseEnter={() => props.handleHover(1)} 
//                     onMouseLeave={() => props.handleMouseLeave()}
//                   >Create Presence</div>
//                   <div
//                     className={`${styles.adventure} ${styles.adventure2}`}
//                     onMouseEnter={() => props.handleHover(2)} 
//                     onMouseLeave={() => props.handleMouseLeave()}
//                   >Build Experiences</div>
//                   <div
//                     className={`${styles.adventure} ${styles.adventure3}`}
//                     onMouseEnter={() => props.handleHover(3)} 
//                     onMouseLeave={() => props.handleMouseLeave()}
//                   >Expand + Grow</div>
//           </div>
//           <div className="container">
//             <div className="content is-size-4" style={{marginTop: 40, padding: props.hoverState !== 0 ? '1.5em 1.5em' : 0, backgroundColor: props.hoverState !== 0 ? "rgba(36,36,36,0.7)" : "transparent"}}>{getDescription(props.hoverState, props.isMobile)}</div>
//           </div>
//         </section>)
// }

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