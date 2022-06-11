import { Text } from "@chakra-ui/react";

declare interface MultiTextProps {
    text: string
    mapKey: string
}

export default function MultiText({text, mapKey}:MultiTextProps) {
  return (
    <>
      {text.split("\n").map((str: string, index: number) => (
        <Text key={`txtStr_${index}_${mapKey}`}>{str}</Text>
      ))}
    </>
  );
}
