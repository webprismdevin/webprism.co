import Typed from 'react-typed';
import { useEffect, useRef, useState } from 'react';
import FadeIn from 'react-fade-in';
import styles from './introview.module.scss';

export interface AVProps {
  nameEntered: (name: string) => void,
  typeComplete?: () => any;
}

// const tagline = "we create websites that amaze our clients and their customers";
const tagline = "a web design + development agency"

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
    nameInput.current.focus();
    if(props.typeComplete) { props.typeComplete(); }
  }

  return(<div className={`container ${styles.introview_container}`}>
          <div className={`columns  ${enterPressed && styles.centerNTMY}`}>
            <div className="column is-1"></div>
            <div className={`column is-10`}>
                {!enterPressed &&
                <>
                    <div />
                    <FadeIn delay={400}>
                      <div className={styles.hi}>hi 👋</div>
                      <div className={styles.were}>we&apos;re</div>
                    </FadeIn>
                    <h1><Typed 
                        strings={["WEBPRISM"]}
                        showCursor={false}
                        className={styles.webprism}
                        onComplete={() => handleComplete()}
                        startDelay={1200}
                        typeSpeed={75}
                      /></h1>
                    {typed && <FadeIn delay={300}><div className={styles.digitalcreative}>{tagline}</div></FadeIn>}
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
                  <div style={{height: "100%", display: 'grid', placeItems: 'center start'}}>
                    <Typed 
                      strings={[`Nice to meet you, ${name}!`]}
                      typeSpeed={40}
                      showCursor={false}
                      className="title is-1"
                    />
                  </div>
                  <div className={styles.scroll_lottie}
                        dangerouslySetInnerHTML={{__html: `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vjs5zX.json"  background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>`}}
                  >
                  </div>
                </>}
            </div>
            <div className="column is-1"></div>
          </div>
          <h1 style={{visibility: 'hidden'}}>hi 👋, we&apos;re WebPrism, {tagline}</h1>
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

  return(
          <div className="container" style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3.5em 1.5em'}}>
            {!enterPressed &&
            <>
              <div className={styles.hi}>hi 👋</div>
              <div className={styles.were}>we&apos;re</div>
              <h1 className={styles.webprism}>WEBPRISM</h1>
              <div className={styles.digitalcreative}>{tagline}</div>
              <div style={{marginTop: 80}}>
                <div className="title is-5">What can we call you?</div>
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
              <h1 style={{visibility: 'hidden'}}>hi 👋, we&apos;re WebPrism, {tagline}</h1>
          </div>
        )
}

export function MobileIntroView(props: IntroViewProps) {
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

const WelcomeBack = (props:any) => {
  return(<div className="container" style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column is-10">
              <FadeIn delay={200}>
                <p className="title is-1">Welcome back, {props.name}! ✌️ </p>
                <div className={styles.digitalcreative}>We&apos;re WebPrism, {tagline}</div>
              </FadeIn>
              <div className={styles.scroll_lottie}
                    dangerouslySetInnerHTML={{__html: `<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vjs5zX.json"  background="transparent"  speed="0.5"  style="width: 100%; height: 100%;"  loop  autoplay></lottie-player>`}}
              >
              </div>
            </div>
            <div className="column is-1"></div>
          </div>
        </div>)
}