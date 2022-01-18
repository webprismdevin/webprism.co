import { extendTheme, ThemeComponents } from "@chakra-ui/react";
import { theme as defaultTheme } from "@chakra-ui/theme"
import { mode } from "@chakra-ui/theme-tools";
import { LinkProps } from "next/link";

const customTheme = extendTheme(defaultTheme, {
  initialColorMode: "system",
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  colors: {
    brand: {
      light: "#F7F4EE",
      dark: "#161718",
      darkBlue: "#00D5FF",
      brightPink: "#FD2187",
      lightBlue: "#4299e1"
    },
  },
  styles: {
    global: (props: ThemeComponents) => ({
      body: {
        bg: mode("brand.light", "brand.dark")(props),
      },
    }),
  },
  components: {
    Button: {
      variants: {
        solid: (props: any) => ({
          bg: mode("brand.dark", "#FD2187")(props),
          color: mode("whiteAlpha.900", "whiteAlpha.900")(props),
          _hover: {
            color: mode("brand.dark", "whiteAlpha.900")(props),
            bg: mode("brand.lightBlue", "brand.darkBlue")(props)
          }
        }),
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: mode('brand.lightBlue', 'brand.darkBlue')(props),
        _hover: {
          color: mode('brand.dark','brand.brightPink')(props)
        }
      })
    },
    Divider: {
      variants: {
        solid: (props: any) => ({
          opacity: mode(1, 0.6)(props)
        })
      }
    }
  },
});

export default customTheme;