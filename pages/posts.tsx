import { GetStaticProps } from "next";
import Head from 'next/head';
import Link from 'next/link';
import FadeIn from "react-fade-in/lib/FadeIn";
import styles from './posts.module.scss'

export interface Post {
    title: string,
    updated: string
}

export interface PostsProps {
    posts: Array<Post>
}

export const Posts:React.FC<PostsProps> = ({ posts }) => {
    return (
      <div>
          <Head>
            <title>WEBPRISM | Blog</title>
          </Head>
          <section className="section align-margin-fix" style={{paddingTop: 160}}>
            <div className="container is-flex is-justify-content-space-between">
                <FadeIn>
                {posts.map((post: any) => <>
                    <Link href={`/posts/${post.slug.current}`} passHref>
                        <div className={`${styles.post} block is-clickable`}>
                            <h1 className="title is-1" style={{textTransform: 'capitalize'}}>{post.title}</h1>
                            <p className="is-size-7 block">{new Date(post._updatedAt).toLocaleDateString()}</p>
                        </div>
                    </Link>
                </>)}
                </FadeIn>
            </div>
          </section>
      </div>
    );
  };
  
export const getStaticProps:GetStaticProps = async ({params}) => {
    const query = encodeURIComponent(`*[ _type == "post" ] {title, _id, _updatedAt, slug }`);

    const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then(res => res.json());
    const allPosts = result.result;

    return {
        props: {
                posts: allPosts
            },
            revalidate: 10
        }
}

export default Posts;