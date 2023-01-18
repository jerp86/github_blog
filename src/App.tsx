import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
  </ThemeProvider>
)