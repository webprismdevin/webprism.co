import { extendTheme, ThemeComponents } from "@chakra-ui/react";
import { theme as defaultTheme, ThemeConfig } from "@chakra-ui/theme"
import { mode } from "@chakra-ui/theme-tools";

const customTheme: ThemeConfig = extendTheme(defaultTheme, {
  initialColorMode: "dark",
  // fonts: {
  //   heading: "Montserrat",
  //   body: "Montserrat",
  // },
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
          bg: mode("brand.lightBlue", "#FD2187")(props),
          color: mode("white", "white")(props),
          _hover: {
            color: mode("whiteAlpha.900", "blackAlpha.900")(props),
            bg: mode("brand.lightBlue", "brand.darkBlue")(props)
          }
        })
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
          borderRadius: '0px'
        },
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
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