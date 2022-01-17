import { useColorMode } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { isMobile } from "react-device-detect"

const Card = dynamic<any>(() => import('https://framer.com/m/Project-Feature-hqLd.js@4cA2z66XXVGuV5yXDNgY'!))

export default function ProjectFeature(){
    const { colorMode } = useColorMode()

    function returnVariant(){
        switch(true){
            case(!isMobile && colorMode === 'light'):
                return 'light'
            case(!isMobile && colorMode === 'light'):
                return 'mobile-light'
            case(isMobile && colorMode === 'dark'):
                return 'mobile-dark'
            case(!isMobile && colorMode === 'dark'):
                return 'dark'
            default:
                return 'light'
        }
    }

    return (<>
        <Card 
            variant={returnVariant()}
        /> 
    </>)
}