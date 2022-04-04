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
import styles from "@/styles/posts.module.scss";

export interface Post {
  title: string;
  updated: string;
}

export interface PostsProps {
  posts: Array<Post>;
}

function randomColor() {
  const rando = Math.floor(Math.random() * 5);

  switch (rando) {
    case 0:
      return styles.pink;
    case 1:
      return styles.blue;
    case 2:
      return styles.orange;
    case 3:
      return styles.green;
    case 4:
      return styles.purple;
  }
}

export const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | WEBPRISM | A web design + development agency</title>
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
            textAlign={"center"}
            size="3xl"
            fontWeight={300}
          >
            Posts
          </Heading>
          <Divider />
          <SimpleGrid
            templateColumns={`repeat(3, 1fr)`}
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
                    <Text noOfLines={6}>{post.metaDesc}</Text>
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
