import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import IntroView from "../components/Welcome/introview";
import Mission from '../components/mission';
import Footer from '../components/footer';
import Projects from '../components/projects';
import Content from '../components/content';
import ContactForm from '../components/ContactForm/contactform';
import styles from './index.module.scss';

export function Index() {
  const [hoverState, setHoverState] = useState(0);
  const [name, setName] = useState("" as string);

  const bgArr = ['/null_bg.jpg', '/presence-2.jpg', '/experience-2.jpg', '/leverage-2.jpg', '/web3-2.jpg'];

  const handleHover = (num: number) => {
    setHoverState(num)
  }

  const handleMouseLeave = () => {
    setHoverState(0);
  }
  
  const returnBgClass = () => {
    switch(hoverState){
      case 1:
        return styles.adventure1
      case 2:
        return styles.adventure2
      case 3: 
        return styles.adventure3
      case 4:
        return styles.adventure4
      default:
        return styles.stars
    }
  }

  return (
    <>
      <Head>
        <title>We&apos;re a new type of creative | WebPrism</title>
        <meta name="theme-color" content="#03040A" />
      </Head>
      <div className={`${styles.page_container} ${returnBgClass()}`}>
      <IntroView liftName={setName}/>
      <Mission name={name}/>
      <Adventures name={name} hoverState={hoverState} handleHover={handleHover} handleMouseLeave={handleMouseLeave} />
      <Content fullheight>
        <div className="block">
          <p className="is-size-4">We&apos;re passionate about passionate people. We craft beautiful websites that showcase our clients passion for what they do, and create captivating experiences for their customers.</p>
        </div>
      </Content>
      <Projects />
      <ContactForm name={name}/>
      <Footer />
      </div>
    </>
  );
}

const Adventures = (props:any) => {
  const getDescription = () => {
    switch(props.hoverState){
      case 1:
        return <>It&apos;s not just a website. You&apos;re little corner of the internet also serves as a digitla business card, a communication platform, a marketing hub, and a portal for customers to connect and interact with you. We&apos;ll help you put your best face forward.</>
      case 2: 
        return <>Digital expriences are everywhere. Some people call them &quot;web apps&quot;. From your favorite social media to online grocery shopping, to browsing photos of thicc dogs, creating a place for your customers to interact with you online builds a deeper relationship.</>
      case 3:
        return <>We&apos;ve built something together. Maybe we&apos;ve started to feel like part of your team. Using the knowledge we&apos;re gained from working together, we&apos;ll help you leverage this new digital marketing platform into growth and continued success.</>
      case 4:
        return <></>
      default: 
        return <>Hover to learn more</>
    }
  }

  return(<div className={styles.adventureContainer}>
            <div className={`${styles.wheretostart} container`}>
              <div className="title is-1">
              Choose your adventure{props.name && ", "}{props.name} 🚀
              </div>
            </div>
            <div className={`container ${styles.pickAdventure}`}>
                  <div
                    className={`${styles.adventure} ${styles.adventure1}`} 
                    onMouseEnter={() => props.handleHover(1)} 
                    onMouseLeave={() => props.handleMouseLeave()}
                  >Create A Presence</div>
                  <div
                    className={`${styles.adventure} ${styles.adventure2}`}
                    onMouseEnter={() => props.handleHover(2)} 
                    onMouseLeave={() => props.handleMouseLeave()}
                  >Build An Experience</div>
                  <div
                    className={`${styles.adventure} ${styles.adventure3}`}
                    onMouseEnter={() => props.handleHover(3)} 
                    onMouseLeave={() => props.handleMouseLeave()}
                  >Digital Consulting</div>
          </div>
          <div className="container">
            <div className="content is-size-4" style={{marginTop: 40, padding: props.hoverState !== 0 ? '1.5em 1.5em' : 0, backgroundColor: props.hoverState !== 0 ? "rgba(36,36,36,0.7)" : "transparent"}}>{getDescription()}</div>
          </div>
        </div>)
}

export default Index;