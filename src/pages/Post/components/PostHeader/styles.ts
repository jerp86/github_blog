import styled from 'styled-components'

export const PostHeaderContainer = styled.section`
  width: 100%;
  min-height: 16.8rem;
  background-color: ${({ theme }) => theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -8.8rem;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  /* gap: 0.8rem; */

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  > h1 {
    font-size: 2.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme.title};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  @media only screen and (max-width: 440px) {
    padding: 1.6rem;
    gap: 0.4rem;
  }
`
