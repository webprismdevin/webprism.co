import Link from 'next/link';
import styles from './projects.module.css';

export interface ProjectProps {
    style?: unknown,
    name?: string,
    children?: unknown,
    tags?: Array<string>,
    backgroundImage?: string,
    color? : string,
    href?: string
}


const Project = (props: ProjectProps) => {
    return(<>
        <Link href={props.href ? props.href : ""} passHref>
            <div className={styles.project} style={Object.assign({backgroundImage: props.backgroundImage}, props.style)}>
                <p className="title is-2" style={{color: props.color ? props.color : "inherit"}}>{props.name}</p>
                <>{props.children && props.children}</>
                <div style={{display: 'flex', justifyContent: 'flex-start', width: '100%'}}>
                    {props.tags && props.tags.map((t, index) => <Tag key={index}>{t}</Tag>)}
                </div>
            </div>
        </Link>
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
                    backgroundImage='url("/themintgardener.jpg")'
                    style={bgStyle}
                    name="The Mint Gardener"
                    href="https://themintgardener.com/"
                    tags={['ecommerce', 'presence']}
                />
                <Project 
                    backgroundImage='url("/optimalbuilding.jpg")'
                    style={bgStyle}
                    color='white'
                    name="Optimal Building" 
                    tags={['presence', 'leverage']}
                    href="https://optimalbuilding.io/"
                />
                <Project name="The Daily Moment"
                    backgroundImage='url("/thedailymoment.jpg")'
                    style={bgStyle}
                    tags={['presence', 'experience', 'web3']}
                    href="https://thedailymoment.com/"
                />
            </div>
            <div className={styles.projects_half}>
                <Project 
                    backgroundImage='url("/finncapital.jpg")'
                    style={bgStyle}
                    color="white"
                    name="Finn Capital"
                    tags={['presence']}
                    href="https://finn.capital/"
                />
                <Project 
                    backgroundImage='url("/studiolife.jpg")'
                    style={bgStyle}
                    name="StudioLife" 
                    tags={['ecommerce', 'presence', 'leverage']}
                />
                <Project 
                    backgroundImage='url("/littlefishswimschool.jpg")'
                    style={bgStyle}
                    name="Little Fish Swim School"
                    tags={['presence']}
                />
                <Project 
                    backgroundImage='url("/strongox.jpg")'
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