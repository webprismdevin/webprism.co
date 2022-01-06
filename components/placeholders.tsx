import { Box, AspectRatio, Image } from '@chakra-ui/react'

export function placeholder1200() {
  return (
    <Box py={20}>
      <AspectRatio
        ratio={1.85 / 1}
        maxW={1200}
        minW={1200}
        marginRight={"auto"}
        marginLeft={"auto"}
      >
        <Image
          src={`https://via.placeholder.com/1200`}
          objectFit={"cover"}
          alt="project image"
        />
      </AspectRatio>
    </Box>
  );
}
