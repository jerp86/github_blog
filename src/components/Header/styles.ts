import styled from 'styled-components'
import headerBg from '../../assets/headerBg.svg'

export const HeaderContainer = styled.header`
  width: calc(100vw - 0.45rem);
  height: 29.6rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 8rem;
  }

  @media only screen and (max-width: 440px) {
    height: 14.8rem;

    > img {
      margin-bottom: 4rem;
      height: 4.9rem;
    }
  }
`
