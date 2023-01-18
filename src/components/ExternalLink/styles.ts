import styled from 'styled-components'

export const ExternalLinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  background: none;
  border: none;
  border-bottom: 1px solid transparent;

  font-weight: 700;
  font-size: 1.2rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.blue};
    transition: 0.4s;
  }
`
