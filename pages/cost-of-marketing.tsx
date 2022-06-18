import Calculator from '@/components/Calculator';
import { Box } from '@chakra-ui/react'
import Head from 'next/head';

export default function COM() {
  return (
    <Box py={20}>
      <Head>
        <title>What&apos;s your marketing cost? | WEBPRISM</title>
        <meta
          name="description"
          content="What's the real cost of doing your own marketing? By assigning
          a value to your time, and adding up the hours you spend
          on your marketing activities per month, we can get a true cost of
          handling your own marketing."
        />
      </Head>
      <Calculator />
    </Box>
  );
}
