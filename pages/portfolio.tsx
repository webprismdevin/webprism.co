import { GetStaticProps } from "next";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Content from "../components/content";
import styles from './portfolio.module.scss';
import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from './portfolio-markdown-styles.module.scss';
import Footer from "../components/footer";

export interface ProjectProps {
    key: string,
    _id: string,
    screenshot: string,
    title: string,
    mainImage: {
        width: number,
        height: number
    },
    body: any,
    tags: [],
    url: string
}

const ProjectComponent = ({screenshot, mainImage, title, body, tags, url}: ProjectProps) => {
    return(
            <section>
                <Content fullheight>
                    <div className="is-flex is-justify-content-space-between is-mobile-is-flex-direction-column">
                        <div className={styles.fullpage_screenshot}>
                            <div className={styles.fs_overlay}>SCROLL</div>
                            <Image src={screenshot} alt="full length project screenshot" width={mainImage.width} height={mainImage.height} />
                        </div>
                        <div className="ml-6 is-flex is-flex-direction-column is-justify-flex-start" style={{minWidth: 300, maxWidth: 300}}>
                            <p className="title is-2">{title}</p>
                            <Link  href={url} passHref><a className="is-size-5 mb-3" target="_blank" rel="noreferrer">Live Site</a></Link>
                            <BlockContent blocks={body} className={markdownStyles.markdown}/>
                            <div className="tagOuter mt-auto">
                                {tags && tags.map(t => <div key={t._id} className="tag has-text-black mr-2 mb-2 is-size-6">{t}</div>)}
                            </div>
                        </div>
                    </div>
                </Content>
            </section>
        )
}

export interface PortfolioProps {
    projects:[]
}

const Portfolio = ({projects}: PortfolioProps) => {
    
    return (<div>
                <Head>
                    <title>WEBPRISM | Portfolio</title>
                </Head>
                <div className={styles.scrollSnap}>
                    {projects.map(p => <ProjectComponent key={p._id} {...p} />)}
                <Footer />
                </div>
            </div>)
}

export default Portfolio;

export const getStaticProps:GetStaticProps = async ({params}) => {
    const query = encodeURIComponent(`*[ _type == "project" ] {
        _id, mainImage, "screenshot": mainImage.asset->url, tags, title, body, url
    }`);

    const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());
    const allProjects = result.result;

    return {
        props: {
                projects: allProjects
            },
            revalidate: 60
        }
}