import { useColorMode } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const Card = dynamic<any>(() => import('https://framer.com/m/Project-Feature-hqLd.js@8N453CrsyMIQwcJaHbPq'!))

export default function ProjectFeature(){
    const { colorMode } = useColorMode()

    return (<>
        <Card 
            variant={colorMode === 'dark' ? 'dark' : 'light'}
        /> 
    </>)
}