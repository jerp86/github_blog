import styled from 'styled-components'

export const InfoContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.4rem;
  margin-top: auto;

  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: ${({ theme }) => theme.subtitle};
    line-height: 0px;

    svg {
      color: ${({ theme }) => theme.label};
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  @media only screen and (max-width: 440px) {
    gap: 1.2rem;

    li {
      gap: 0.4rem;
      font-size: 1.2rem;

      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
`
