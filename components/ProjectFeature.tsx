import { useColorMode } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { isMobile } from "react-device-detect"
import { useRouter } from 'next/router'

const Card = dynamic<any>(() => import('https://framer.com/m/Project-Feature-hqLd.js@HS5uKNCPKeNcJXV5Up86'!))

export default function ProjectFeature(){
    const { colorMode } = useColorMode()
    const router = useRouter()

    function returnVariant(){
        switch(true){
            case(!isMobile && colorMode === 'light'):
                return 'light'
            case(isMobile && colorMode === 'light'):
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
            tap={() => router.push('/portfolio/le-marche-reverie')}
        /> 
    </>)
}