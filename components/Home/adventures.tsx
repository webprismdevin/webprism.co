import styles from '@/styles/adventures.module.scss';

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

const Adventures = (props:any) => {
    return(<section className={`section ${styles.adventureContainer}`}>
              <div className={`${styles.wheretostart} container`}>
                <div className="columns">
                  <div className="column is-1"></div>
                  <div className="column is-10">
                    <div className="title is-1">Choose your adventure{props.name && ", "}{props.name} 🚀</div>
                  </div>
                  <div className="column is-1"></div>
                </div>
              </div>
              <div className={`container`}>
                <div className="columns">
                  <div className="column is-1"></div>
                  <div className={`column is-10 ${styles.pickAdventure}`}>
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
                  <div className="column is-1"></div>
                </div>

            </div>
            <div className="container">
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column is-10">
                  <div className="content is-size-4" style={{marginTop: 40, padding: props.hoverState !== 0 ? '1.5em 1.5em' : 0, backgroundColor: props.hoverState !== 0 ? "rgba(36,36,36,0.7)" : "transparent"}}>{getDescription(props.hoverState, props.isMobile)}</div>
                </div>
                <div className="column is-1"></div>
              </div>
            </div>
          </section>)
}

export default Adventures;