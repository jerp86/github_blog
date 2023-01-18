import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostFromListContainer = styled(Link)`
  width: 100%;
  height: min(100%, 26rem);
  background-color: ${({ theme }) => theme.post};
  border: 2px solid ${({ theme }) => theme.post};
  border-radius: 10px;
  padding: 3.2rem;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border-color: ${({ theme }) => theme.label};
    transition: 0.4s;
  }
`

export const PostFromListHeader = styled.header`
  display: flex;
  gap: 1.6rem;
  margin-bottom: 2rem;

  h2 {
    flex: 1;
    font-size: 2rem;
    line-height: 160%;
    color: ${({ theme }) => theme.title};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    width: max-content;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.span};
    text-align: right;
  }
`
