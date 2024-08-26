import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7c6c7",
      900: "#d53f8c",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
