import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  height: min(100%, 21.2rem);
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 2px 28px rgba(0, 0, 0.2);
  border-radius: 10px;
  margin-top: -8.8rem;
  padding: 3.2rem 4rem;
  display: flex;
  gap: 3.2rem;

  @media only screen and (max-width: 440px) {
    padding: 1.6rem 2rem;
    gap: 1.6rem;
  }
`

export const ProfilePicture = styled.img`
  width: 14.8rem;
  height: 14.8rem;
  border-radius: 8px;
  object-fit: cover;

  @media only screen and (max-width: 440px) {
    width: 7.4rem;
    height: 7.4rem;
  }
`

export const ProfileDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  ul {
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
      }
    }
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  h1 {
    font-size: 2.4rem;
    line-height: 130%;
    color: ${({ theme }) => theme.title};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`
