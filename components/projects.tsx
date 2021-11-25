import Link from 'next/link';
import styles from '@/styles/projects.module.scss';

export interface ProjectProps {
    style?: unknown,
    name?: string,
    children?: unknown,
    tags?: Array<string>,
    backgroundImage?: string,
    color? : string,
    href?: string,
    tbd?: boolean
}


const Project = (props: ProjectProps) => {
    return(<>
        {!props.tbd && 
        <Link href={props.href ? props.href : ""} passHref>
            <div className={`${styles.project}`} style={Object.assign({backgroundImage: props.backgroundImage}, props.style)}>
                <p className="title is-2" style={{color: props.color ? props.color : "inherit"}}>{props.name}</p>
                <>{props.children && props.children}</>
                <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
                    {props.tags && props.tags.map((t, index) => <Tag key={index}>{t}</Tag>)}
                </div>
            </div>
        </Link>}
        {props.tbd && 
        <div className={`${props.tbd ? styles.tbd : ""} ${styles.project}`} style={Object.assign({backgroundImage: props.backgroundImage}, props.style)}>
            <p className="title is-2" style={{color: props.color ? props.color : "inherit"}}>Coming Soon!</p>
            <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
                {props.tags && props.tags.map((t, index) => <Tag key={index}>{t}</Tag>)}
            </div>                
        </div>}
    </>)
}

const Tag = (props:any) => {
    return(<span style={{margin: 4}}className="tag is-light">{props.children}</span>)
}

const Projects = () => {
    const bgStyle = {backgroundSize: 'cover', backgroundPosition: 'center'};

    return(<>
        <div className={styles.projects_outer}>
            <div className={styles.projects_half}>
                <Project
                    backgroundImage='url("/projects/themintgardener.webp")'
                    style={bgStyle}
                    name="The Mint Gardener"
                    href="https://themintgardener.com/"
                    tags={['ecommerce', 'presence']}
                />
                <Project 
                    backgroundImage='url("/projects/optimalbuilding.webp")'
                    style={bgStyle}
                    color='white'
                    name="Optimal Building"
                    tbd
                    tags={['presence', 'grow + expand']}
                    href="https://optimalbuilding.io/"
                />
                <Project name="The Daily Moment"
                    backgroundImage='url("/projects/thedailymoment.webp")'
                    style={bgStyle}
                    tbd
                    tags={['presence', 'experience', 'web3']}
                    href="https://thedailymoment.com/"
                />
            </div>
            <div className={styles.projects_half}>
                <Project 
                    backgroundImage='url("/projects/finncapital.webp")'
                    style={bgStyle}
                    color="white"
                    name="Finn Capital"
                    tags={['presence']}
                    tbd
                    href="https://finn.capital/"
                />
                <Project 
                    backgroundImage='url("/projects/studiolife.webp")'
                    style={bgStyle}
                    name="StudioLife" 
                    tags={['ecommerce', 'presence', 'grow + expand']}
                    href="https://studiolifeseattle.com"
                />
                <Project 
                    backgroundImage='url("/projects/littlefishswimschool.webp")'
                    style={bgStyle}
                    name="Little Fish Swim School"
                    color="white"
                    tags={['presence']}
                    href="https://littlefishswimschool.net"
                />
                <Project 
                    backgroundImage='url("/projects/strongox.webp")'
                    style={bgStyle}
                    color='white'
                    name="Strong Ox Supplements"
                    tags={['ecommerce', 'presence']}
                    href="https://www.strongoxsupplements.com/"
                />
            </div>
        </div>
    </>)
}

export default Projects;