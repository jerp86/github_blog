import styled from 'styled-components'
import headerBg from '../../assets/headerBg.svg'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 29.6rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 8rem;
  }
`
