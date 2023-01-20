import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 7.2rem;
  margin-bottom: 4.8rem;
  width: 100%;

  input {
    background-color: ${({ theme }) => theme.input};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 6px;
    color: ${({ theme }) => theme.text};
    padding: 1.2rem 1.6rem;

    &:focus {
      border-color: ${({ theme }) => theme.blue};
      transition: 0.4s;
    }

    &::placeholder {
      color: ${({ theme }) => theme.label};
    }
  }

  @media only screen and (max-width: 440px) {
    gap: 0.6rem;
    margin-top: 3.6rem;
    margin-bottom: 2.4rem;
  }
`

export const SearchHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1.8rem;
    line-height: 160%;
    color: ${({ theme }) => theme.subtitle};
  }

  span {
    font-size: 1.4rem;
    text-align: right;
    color: ${({ theme }) => theme.span};
  }
`
