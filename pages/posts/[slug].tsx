import { GetStaticProps } from "next";
import Head from "next/head";
import markdownStyles from "./markdown-styles.module.scss";
import { imageBuilder } from "../../lib/sanity";
import BlockContent from "@sanity/block-content-to-react";
// import Image from "next/image";
import styles from "./post.module.scss";
import {
  Container,
  Text,
  Heading,
  Stack,
  Flex,
  Image,
  Box,
  AspectRatio,
} from "@chakra-ui/react";

export interface PostProps {
  title: string;
  body: any;
  _updatedAt: string;
  _createdAt: string;
  mainImage: any;
  metaDesc: string;
  authorName: string;
  authorPic: any;
}

export const Post: React.FC<PostProps> = ({
  title,
  body,
  _updatedAt,
  _createdAt,
  mainImage,
  metaDesc,
  authorName,
  authorPic,
}) => {
  function getImgUrl() {
    if (mainImage !== undefined) {
      return imageBuilder(mainImage).width(1240).height(540).url();
    } else {
      return "/post-placeholder.jpg";
    }
  }

  function getPfpUrl() {
    if (authorPic) {
      return imageBuilder(authorPic).width(80).height(80).url();
    } else {
      return "";
    }
  }

  return (
    <>
      <Head>
        <title>WEBPRISM | {title}</title>
        <meta name="description" content={metaDesc} />
      </Head>
      <Container py={40}>
        <Stack spacing={8}>
          <AspectRatio ratio={1240 / 540}>
            <Image
              src={getImgUrl() as string}
              height={540}
              width={1240}
              alt="post image"
            />
          </AspectRatio>
          <Heading as="h1">{title}</Heading>
          <Flex alignItems={"center"} gap={4}>
            <Image
              borderRadius={"full"}
              boxSize={12}
              src={getPfpUrl() as string}
              alt={`${authorName} Profile Pic`}
            />
            <Text>By: {authorName}</Text>
          </Flex>
          <BlockContent
            blocks={body}
            className={markdownStyles.markdown}
            projectId="0ggffobx"
            dataset="production"
          />
          <Box>
            <Text>
              Published: {new Date(_createdAt).toLocaleDateString()}
            </Text>
            <Text>
              Last updated: {new Date(_updatedAt).toLocaleDateString()}
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageSlug = params?.slug;
  const query =
    encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}"] {
    metaDesc, mainImage, title, body, _createdAt, _updatedAt, "authorName": author->name,
    "authorPic": author->image
   }`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  return {
    props: {
      fullPost: post,
      authorName: post.authorName,
      authorPic: post.authorPic,
      metaDesc: post.metaDesc ? post.metaDesc : null,
      mainImage: post.mainImage ? post.mainImage : null,
      title: post.title,
      body: post.body,
      _createdAt: post._createdAt,
      _updatedAt: post._updatedAt,
    },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const query = encodeURIComponent(
    `*[ _type == "post"] | order(_createdAt asc) { slug }`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const allPosts = result.result;

  return {
    paths:
      allPosts?.map((post: any) => ({
        params: {
          slug: post.slug.current,
        },
      })) || [],
    fallback: true,
  };
}

export default Post;
