import { useState } from 'react';
import Head from 'next/head';
import {IntroView, MobileIntroView } from "../components/Welcome/introview";
import Mission from '../components/mission';
import Footer from '../components/footer';
import Projects from '../components/projects';
import Content from '../components/content';
import ContactForm from '../components/ContactForm/contactform';
import Typed from 'react-typed';
import SwipeableViews from 'react-swipeable-views';
import Lottie from 'react-lottie';
import swipeAnimation from  './11516-swipe-left-arrows.json';
import styles from './index.module.scss';
import Image from 'next/image';

export function Index(props:any) {
  const [hoverState, setHoverState] = useState(0);
  const [name, setName] = useState("" as string);
  const [formSubmitted, setFormSubmitted] = useState(false);
 
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

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>WebPrism | A Passion Driven Creative Agency</title>
        <meta name="title" content="WebPrism | A Passion Driven Creative Agency" />
        <meta name="description" content="WebPrism is a digital creative agency that helps organizations build engaging digital experiences. Our team works with clients as true partners, helping them formulate their vision and mission, then adopting that mission as our own. The result? Beautiful websites and apps we're proud to share with the world." />
      </Head>
      {props.isMobile && <div style={{position: 'fixed', top: 0, left: 0, height: '100%', width: '100%', zIndex: -1}}>
        <Image src="/null_bg_mobile.webp" layout="fill" alt="decorative" />
      </div>}
      <div className={`${styles.page_container} ${returnBgClass()}`}>
        {props.isMobile ? <MobileIntroView liftName={setName}/> : <IntroView liftName={setName}/>}
        <Content fullheight title="We&apos;re passionate about passionate people.">
          <p className="is-size-4">We craft beautiful websites that showcase our clients&apos; passion for what they do, and create captivating experiences for their customers.</p>
        </Content>
        {/* {props.isMobile ? <AdventuresMobile name={name} /> : <Adventures name={name} hoverState={hoverState} handleHover={handleHover} handleMouseLeave={handleMouseLeave} />} */}
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
      </div>
    </>
  );
}

const getDescription = (hoverState: number, isMobile?: boolean) => {
  switch(hoverState){
    case 1:
      return <>{isMobile && <h2 style={{color: 'white'}}>Create Presence</h2>}
        It&apos;s not just a website. You&apos;re little corner of the internet also serves as a digital business card, a communication platform, a marketing hub, and a portal for customers to connect and interact with you. We&apos;ll help you put your best foot (and face) forward.</>
    case 2: 
      return <>{isMobile && <h2 style={{color: 'white'}}>Build Experiences</h2>}
        Connect with your customers on a deeper level by creating a memorable digital experience. An engaging experience will increase interactions with current and potential customers and open new ways to further your mission and deliver more value to the world.</>
    case 3:
      return <>{isMobile && <h2 style={{color: 'white'}}>Expand + Grow</h2>}
        We&apos;ve built something together. Maybe we&apos;ve started to feel like part of your team. Using the knowledge we&apos;re gained from working together, we&apos;ll help you leverage this new digital marketing platform into growth and expansion in the next phase of your adventure.</>
    case 4:
      return <></>
    default: 
      return <>{isMobile ? "Tap": "Hover"} to learn more</>
  }
}

const AdventuresMobile = (props: any) => {

  const swipeOptions = {
    loop: true,
    autoplay: true, 
    animationData: swipeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(<>
            <SwipeableViews>
              <div className={`block ${styles.adventure1} ${styles.mobileAdventure}`}>
                <div>
                  <p className="title is-2">Create Presence</p>
                  <p className="is-size-5">{getDescription(1)}</p>
                </div>
              </div>
              <div className={`block ${styles.adventure2} ${styles.mobileAdventure}`}>
                <div>
                  <p className="title is-2">Build Experiences</p>
                  <p className="is-size-5">{getDescription(2)}</p>
                </div>
              </div>
              <div className={`block ${styles.adventure3} ${styles.mobileAdventure}`}>
                <div>
                  <p className="title is-2">Expand + Grow</p>
                  <p className="is-size-5">{getDescription(3)}</p>
                </div>
              </div>
            </SwipeableViews>
            <div className={styles.swipeAnimation}>
              <Lottie
                    options={swipeOptions}
                    height={120}
                    width={120}
              />
            </div>
        </>)
}

const Adventures = (props:any) => {
  return(<section className={`section ${styles.adventureContainer}`}>
            <div className={`${styles.wheretostart} container`}>
              <div className="title is-1">Choose your adventure{props.name && ", "}{props.name} 🚀</div>
            </div>
            <div className={`container ${styles.pickAdventure}`}>
                  <div
                    className={`${styles.adventure} ${styles.adventure1}`} 
                    onMouseEnter={() => props.handleHover(1)} 
                    onMouseLeave={() => props.handleMouseLeave()}
                  >Create Presence</div>
                  <div
                    className={`${styles.adventure} ${styles.adventure2}`}
                    onMouseEnter={() => props.handleHover(2)} 
                    onMouseLeave={() => props.handleMouseLeave()}
                  >Build Experiences</div>
                  <div
                    className={`${styles.adventure} ${styles.adventure3}`}
                    onMouseEnter={() => props.handleHover(3)} 
                    onMouseLeave={() => props.handleMouseLeave()}
                  >Expand + Grow</div>
          </div>
          <div className="container">
            <div className="content is-size-4" style={{marginTop: 40, padding: props.hoverState !== 0 ? '1.5em 1.5em' : 0, backgroundColor: props.hoverState !== 0 ? "rgba(36,36,36,0.7)" : "transparent"}}>{getDescription(props.hoverState, props.isMobile)}</div>
          </div>
        </section>)
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