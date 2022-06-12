import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Heading,
  Text,
  Flex,
  Stack,
  SimpleGrid,
  GridItem,
  Divider,
  AspectRatio,
  Image,
} from "@chakra-ui/react";

export interface Post {
  title: string;
  updated: string;
}

export interface PostsProps {
  posts: Array<Post>;
}

export const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog | WEBPRISM | A web design + development agency</title>
        <meta
          name="description"
          content="We love to write about life, our business, and give away everything we learn! Come on it, and you might just learn something."
        />
      </Head>
      <Container maxW="container.xl" py={24} centerContent>
        <Stack spacing={8}>
          <Heading
            as="h1"
            textTransform={"uppercase"}
            size="3xl"
            fontWeight={300}
          >
            Blog
          </Heading>
          <Divider />
          <SimpleGrid
            templateColumns={`repeat(2, 1fr)`}
            templateRows={"repeat(1, 1fr)"}
            columnGap={8}
            rowGap={8}
          >
            {posts.map((post: any) => (
              <Link
                href={`/posts/${post.slug.current}`}
                passHref
                key={post._id}
              >
                <GridItem
                  colSpan={[3, 1]}
                  cursor={"pointer"}
                  transition="opacity 200ms ease"
                  _hover={{ opacity: 0.6 }}
                  shadow="sm"
                  bgColor="white"
                >
                  <AspectRatio ratio={3 / 2} w={"full"}>
                    <Image
                      src={post.mainImage}
                      alt={post.title + " post image"}
                    />
                  </AspectRatio>
                  <Stack spacing={4} p={8}>
                    <Heading size="lg" textTransform={"uppercase"} fontWeight={300}>
                      {post.title}
                    </Heading>
                    <Text>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </Text>
                    <Text noOfLines={4}>{post.metaDesc}</Text>
                  </Stack>
                </GridItem>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = encodeURIComponent(
    `*[ _type == "post" ] { publishedAt, slug, title, _id, metaDesc, "mainImage": mainImage.asset->url } | order (publishedAt desc)`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const allPosts = result.result;

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
};

export default Posts;
