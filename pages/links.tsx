import { Heading, Flex, Box, Link, Container, Stack, Tag, Text, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

export default function Links({ data }: any) {
  return (
    <>
      <Head>
        <title>Links | WEBPRISM | Crafted Websites for Authentic Brands</title>
      </Head>
      <Container 
        maxW="container.lg" 
        pt={40}
        centerContent  
      >
        <Heading
          mb={4}
          as="h1"
          size="2xl"
          textTransform={"uppercase"}
          fontWeight={300}
        >
          {data.title}
        </Heading>
        <Heading
          mb={12} as="h2" size="md">
          {data.subtitle}
        </Heading>
        <Stack spacing={8}>
          {data.links.map((link: any) => {
            if (link._type === "link")
              return (
                <Link fontSize="xl" p={8} shadow="md" key={link._id} href={link.url}>
                    <Text>{link.title}</Text>
                    <Divider my={2} />
                    <Tag>Link</Tag>
                </Link>
              );

            if (link._type === "post")
              return (
                <NextLink key={link._id} href={`/posts/${link.slug.current}`}>
                  <Link fontSize="xl" p={8} shadow="md">
                      <Text>{link.title}</Text>
                      <Divider my={2} />
                      <Tag>Blog Post</Tag>
                  </Link>
                </NextLink>
              );
          })}
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const query = encodeURIComponent(`
        *[_type == "links_page"][0] {
          title, subtitle, links[]->
        }
    `);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const data = result.result;

  return {
    props: {
      data: data,
    },
  };
}
