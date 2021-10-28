import Typed from 'react-typed';
import { useEffect, useRef, useState } from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
import scrollAnimation from  './14325-scroll.json';
import loadingAnimation from './77612-loading-animation.json';
import styles from './introview.module.css';

const scrollOptions = {
  loop: true,
  autoplay: true, 
  animationData: scrollAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export interface AVProps {
  nameEntered: (name: string) => void
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
    nameInput.current.focus();
  }

  return(<div className="container" style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3.5em 1.5em'}}>
        {!enterPressed &&
          <>
            <FadeIn delay={100}>
              <div className={styles.hi}>hi 👋</div>
              <div className={styles.were}>we&apos;re</div>
            </FadeIn>
            <Typed 
                strings={["WEBPRISM"]}
                showCursor={false}
                className={styles.webprism}
                onComplete={() => handleComplete()}
                startDelay={800}
                typeSpeed={75}
              />
            {typed && <FadeIn delay={100}><div className={styles.digitalcreative}>a digital creative agency.</div></FadeIn>}
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
              <div className={styles.scroll_lottie}>
                <Lottie
                  options={scrollOptions}
                  height={200}
                  width={200}
                />
              </div>
            </>}
            <h1 style={{visibility: 'hidden'}}>hi 👋, we&apos;re WebPrism, a digital creative agency.</h1>
        </div>)
}

const WelcomeBack = (props:any) => {
  return(<div className="container" style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3.5em 1.5em'}}>
          <FadeIn delay={200}>
            <p className="title is-1">Welcome back, {props.name}! ✌️ </p>
            <p className="title is-3">We&apos;re WebPrism, a digital creative agency.</p>
          </FadeIn>
          <div className={styles.scroll_lottie}>
            <Lottie
              options={scrollOptions}
              height={300}
              width={300}
            />
          </div>
        </div>)
}

/* eslint-disable-next-line */
export interface IntroViewProps {
  liftName?: any
}

export function IntroView(props: IntroViewProps) {
  const [name, setName] = useState(null);
  const [nameFromLS, setNameFromLS] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rememberedName = window.localStorage.getItem("webprism_name");
    if(rememberedName){
      setNameFromLS(true);
      setLoading(false);
      props.liftName(rememberedName);
    }
    else setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nameEntered = (name:any) => {
    setName(name);
    props.liftName(name);
  }

  const loadingOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div className="hero is-fullheight">
        {loading && <div className="hero-body">
          <Lottie 
            options={loadingOptions}
            height={200}
            width={200}
          />  
        </div>}
        {!loading && <div className={styles.herobody}>
          {!nameFromLS && <AshleyView nameEntered={nameEntered}/>}
          {nameFromLS && <WelcomeBack name={name}/>}
        </div>}
      </div>
    </>
  );
}

export default IntroView;
