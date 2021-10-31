import { GetStaticProps } from "next";
import Head from 'next/head';
import markdownStyles from './markdown-styles.module.scss'
import BlockContent from '@sanity/block-content-to-react'
import styles from './post.module.scss';

export interface PostProps {
    title: string,
    body: any,
    _updatedAt: string
}

export const Post:React.FC<PostProps> = ({ title, body, _updatedAt }) => {
    return (
      <div className={styles.blogpage}>
          <Head>
            <title>WEBPRISM | {title}</title>
          </Head>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-2"/>
                <div className={`column is-8 ${styles.postcontainer}`}>
                  <h1 className="title is-1">{title}</h1>
                  <p className="is-size-7 block">{new Date(_updatedAt).toLocaleDateString()}</p>
                  <BlockContent blocks={body} className={markdownStyles.markdown}/>
                </div>
                <div className="column is-2"/>
              </div>
            </div>
          </section>
      </div>
    );
  };
  
// export const getServerSideProps = async (pageContext: GetServerSidePropsContext) => {
//     const pageSlug = pageContext.query.slug;
//     const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);

//     const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
//     const result = await fetch(url).then(res => res.json());
//     const post = result.result[0];

//     return {
//         props: {
//                 title: post.title,
//                 body: post.body,
//                 _updatedAt: post._updatedAt,
//                 fullPost: post
//             }
//         }
// };

export const getStaticProps:GetStaticProps = async ({params}) => {
  const pageSlug = params?.slug;
  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  return {
      props: {
            title: post.title,
            body: post.body,
            _updatedAt: post._updatedAt,
          },
          revalidate: 10
      }
}

export async function getStaticPaths() {
  const query = encodeURIComponent(`*[ _type == "post" ] { slug }`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then(res => res.json());
  const allPosts = result.result;

  return {
    paths:
      allPosts?.map((post: any) => ({
        params: {
          slug: post.slug.current,
        },
      })) || [],
    fallback: true,
  }
}

export default Post;