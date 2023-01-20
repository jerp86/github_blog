import styled from 'styled-components'

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 4rem 3.2rem;
  margin-bottom: 12.8rem;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
  }

  ul {
    list-style: inherit;
    padding-left: 2.4rem;
  }

  pre {
    background: ${({ theme }) => theme.post};
    padding: 1.6rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace;
        line-height: 160% !important;
      }
    }
  }

  @media only screen and (max-width: 440px) {
    padding: 2rem 1.6rem;
    margin-bottom: 6.4rem;
  }
`
