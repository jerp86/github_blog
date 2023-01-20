import styled from 'styled-components'

export const PostsListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(41.6rem, 1fr));
  gap: 3.2rem;
  margin-bottom: 7.2rem;

  @media only screen and (max-width: 440px) {
    gap: 1.6rem;
    margin-bottom: 3.6rem;
  }
`
