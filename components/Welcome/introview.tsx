import Typed from 'react-typed';
import { useEffect, useRef, useState } from 'react';
import FadeIn from 'react-fade-in';
import styles from './introview.module.css';

export interface AVProps {
  nameEntered: (name: string) => void,
  typeComplete: () => any;
}

const AshleyView = (props:AVProps) => {
  const [typed, setTyped] = useState(false);
  const [name, setName] = useState("");
  const [enterPressed, setEnterPressed] = useState(false);

  const nameInput = useRef(null) as any;

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      window.localStorage.setItem("webprism_name", name);
      setEnterPressed(true);
      props.nameEntered(name);
      window.scrollTo(0,0);
    }
  }

  const handleComplete = () => {
    setTyped(true);
    props.typeComplete();
    nameInput.current.focus();
  }

  return(<div className={`container ${styles.introview_container}`}>
        {!enterPressed &&
          <>
            <FadeIn delay={400}>
              <div className={styles.hi}>hi 👋</div>
              <div className={styles.were}>we&apos;re</div>
            </FadeIn>
            <Typed 
                strings={["WEBPRISM"]}
                showCursor={false}
                className={styles.webprism}
                onComplete={() => handleComplete()}
                startDelay={1200}
                typeSpeed={75}
              />
            {typed && <FadeIn delay={300}><div className={styles.digitalcreative}>a digital creative agency.</div></FadeIn>}
            {typed && <div className={styles.entername}><FadeIn delay={300}>
                  <div className="title is-3">What can we call you?</div>
                  <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    ref={nameInput} 
                    className={`title is-5 ${styles.nameinput}`} 
                    placeholder="type name + hit enter" 
                    style={{borderColor: 'transparent', outline: 'none', display: 'inline', minWidth: '100%'}} 
                    onKeyDown={handleKeyDown} 
                  />
              </FadeIn></div>}
            </>}
            {enterPressed && <>
              <Typed 
                strings={[`Nice to meet you, ${name}!`]}
                typeSpeed={40}
                showCursor={false}
                className="title is-1"
              />
              <div className={styles.scroll_lottie}
                    dangerouslySetInnerHTML={{__html: `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vjs5zX.json"  background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>`}}
              >
              </div>
            </>}
            <h1 style={{visibility: 'hidden'}}>hi 👋, we&apos;re WebPrism, a digital creative agency.</h1>
        </div>)
}

const AshleyViewMobile = (props:AVProps) => {
  const [typed, setTyped] = useState(false);
  const [name, setName] = useState("");
  const [enterPressed, setEnterPressed] = useState(false);

  const nameInput = useRef(null) as any;

  const handleKeyDown = (event:any) => {
    if (event.key === 'Enter') {
      window.localStorage.setItem("webprism_name", name);
      setEnterPressed(true);
      props.nameEntered(name);
      window.scrollTo(0,0);
    }
  }

  const handleComplete = () => {
    setTyped(true);
    nameInput.current.focus();
  }

  return(
          <div className="container" style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3.5em 1.5em'}}>
            {!enterPressed &&
            <>
              <div className={styles.hi}>hi 👋</div>
              <div className={styles.were}>we&apos;re</div>
              <div className={styles.webprism}>WEBPRISM</div>
              <div className={styles.digitalcreative}>a digital creative agency.</div>
              <div style={{marginTop: 80}}>
                <div className="title is-4">What can we call you?</div>
                <input 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  ref={nameInput} 
                  className={`title is-5 ${styles.nameinput}`} 
                  placeholder="type name + hit enter" 
                  style={{borderColor: 'transparent', outline: 'none', display: 'inline', minWidth: '100%'}} 
                  onKeyDown={handleKeyDown} 
                />
              </div>
              </>}
              {enterPressed && <>
                <Typed 
                  strings={[`Nice to meet you, ${name}!`]}
                  typeSpeed={40}
                  showCursor={false}
                  className="title is-1"
                />
                <div className={styles.scroll_lottie}
                      dangerouslySetInnerHTML={{__html: `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vjs5zX.json"  background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>`}}
                >
                </div>
              </>}
              <h1 style={{visibility: 'hidden'}}>hi 👋, we&apos;re WebPrism, a digital creative agency.</h1>
          </div>
        )
}

const WelcomeBack = (props:any) => {
  return(<div className="container" style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <FadeIn delay={200}>
            <p className="title is-1">Welcome back, {props.name}! ✌️ </p>
            <p className="title is-3">We&apos;re WebPrism, a digital creative agency.</p>
          </FadeIn>
          <div className={styles.scroll_lottie}
                dangerouslySetInnerHTML={{__html: `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vjs5zX.json"  background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>`}}
          >
          </div>
        </div>)
}

/* eslint-disable-next-line */
export interface IntroViewProps {
  liftName?: any,
  typeComplete?: () => any
}

export function IntroView(props: IntroViewProps) {
  const [name, setName] = useState<string | null>(null);
  const [nameFromLS, setNameFromLS] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getName = async () => {
      const rememberedName = await window.localStorage.getItem("webprism_name");

      if(rememberedName){
        setName(rememberedName);
        props.liftName(rememberedName);
        setNameFromLS(true);
        setLoading(false);
      }

      else if(!rememberedName){
        setLoading(false);
      }

    }

    getName();
  }, []);

  const nameEntered = (name:any) => {
    setName(name);
    props.liftName(name);
  }

  const handleComplete = () => {
    if(props.typeComplete) props.typeComplete();
  }

  return (
    <>
      <section className="section">
        {loading && <div></div>}
        {!loading && <div>
          {!nameFromLS && <AshleyView typeComplete={() => handleComplete()} nameEntered={nameEntered}/>}
          {nameFromLS && <WelcomeBack name={name}/>}
        </div>}
      </section>
    </>
  );
}

export function MobileIntroView(props: IntroViewProps) {
  const [name, setName] = useState<string | null>(null);
  const [nameFromLS, setNameFromLS] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getName = async () => {
      const rememberedName = await window.localStorage.getItem("webprism_name");

      console.log(rememberedName)

      if(rememberedName){
        setName(rememberedName);
        props.liftName(rememberedName);
        setNameFromLS(true);
        setLoading(false);
      }

      else if(!rememberedName){
        setLoading(false);
      }

    }

    getName();
  }, []);

  const nameEntered = (name:any) => {
    setName(name);
    props.liftName(name);
  }

  return (
    <>
      <div className="hero is-fullheight">
        {loading && <div className="hero-body"></div>}
        {!loading && <div className={styles.herobody}>
          {!nameFromLS && <AshleyViewMobile nameEntered={nameEntered}/>}
          {nameFromLS && <WelcomeBack name={name}/>}
        </div>}
      </div>
    </>
  );
}
