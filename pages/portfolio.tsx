import { GetStaticProps } from "next";
import Head from 'next/head';
import Link from 'next/link';

const Portfolio = () => {
    
    return (<>Portfolio</>)
}

export default Portfolio;

export const getStaticProps:GetStaticProps = async ({params}) => {
    const query = encodeURIComponent(`*[ _type == "project" ] `);

    const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());
    const allProjects = result.result;

    return {
        props: {
                Projects: allProjects
            },
            revalidate: 60
        }
}