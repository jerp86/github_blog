import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.border}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.blue};
      border-radius: 999px;
    }
  }

  :focus {
    outline: 0;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
  }

  button:not(:disabled), a {
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, button {
    font: 400 1.6rem 'Nunito', sans-serif;
    line-height: 160%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    width: min(100%, 86.4rem);
    margin: 0 auto;

    @media only screen and (max-width: 864px) {
      padding: 0 1.6rem;
    }
  }
`
