import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {
  ProfileHeader,
  ProfileContainer,
  ProfileDetails,
  ProfilePicture,
} from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Info } from '../../../../components/Info'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const tag = [
  { icon: faGithub, text: 'jerp86' },
  { icon: faBuilding, text: 'Cygnus.IT' },
  { icon: faUserGroup, text: '108 seguidores' },
]

export const Profile = () => (
  <ProfileContainer>
    <ProfilePicture src="https://github.com/jerp86.png" alt="" />

    <ProfileDetails>
      <ProfileHeader>
        <h1>José Eduardo Rodrigues Pinto</h1>
        <ExternalLink
          href="https://github.com/jerp86"
          target="_blank"
          rel="noopener noreferrer"
          icon={faArrowUpRightFromSquare}
        >
          Github
        </ExternalLink>
      </ProfileHeader>

      <p>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </p>

      <Info tag={tag} />
    </ProfileDetails>
  </ProfileContainer>
)
