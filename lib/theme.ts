import { extendTheme, ThemeComponents } from "@chakra-ui/react";
import { theme as defaultTheme } from "@chakra-ui/theme"
import { mode } from "@chakra-ui/theme-tools";

const customTheme = extendTheme(defaultTheme, {
  useSystemColorMode: false,
  initialColorMode: "light",
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  colors: {
    brand: {
      light: "#F7F4EE",
      dark: "#161718",
      darkBlue: "#00D5FF",
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
            color: mode("brand.dark", "whiteAlpha.900")(props)
          }
        }),
      },
    }
  },
});

export default customTheme;