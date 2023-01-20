import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './context/GithubContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <GithubProvider>
        <Router />
      </GithubProvider>
    </ThemeProvider>
  </BrowserRouter>
)
