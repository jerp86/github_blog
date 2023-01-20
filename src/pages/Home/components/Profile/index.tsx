import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import {
  ProfileHeader,
  ProfileContainer,
  ProfileDetails,
  ProfilePicture,
} from './styles'
import { ExternalLink, Info, Spinner } from '../../../../components'
import { GithubContext } from '../../../../context/GithubContext'

export const Profile = () => {
  const { isLoading, profile } = useContextSelector(
    GithubContext,
    ({ isLoading, profile }) => ({
      isLoading,
      profile,
    }),
  )

  const tag = useMemo(
    () => [
      { icon: faGithub, text: profile.login },
      { icon: faBuilding, text: profile.company },
      { icon: faUserGroup, text: `${profile.followers} seguidores` },
    ],
    [profile],
  )

  if (isLoading) {
    return (
      <ProfileContainer>
        <Spinner />
      </ProfileContainer>
    )
  }

  return (
    <ProfileContainer>
      <ProfilePicture src={profile.avatar_url} alt="" />

      <ProfileDetails>
        <ProfileHeader>
          <h1>{profile.name}</h1>
          <ExternalLink
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </ExternalLink>
        </ProfileHeader>

        <p>{profile.bio}</p>

        <Info tag={tag} />
      </ProfileDetails>
    </ProfileContainer>
  )
}
