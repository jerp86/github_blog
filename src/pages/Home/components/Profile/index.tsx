import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ProfileHeader,
  ProfileContainer,
  ProfileDetails,
  ProfilePicture,
} from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'

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

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          jerp86
        </li>
        <li>
          <FontAwesomeIcon icon={faBuilding} />
          Cygnus.IT
        </li>
        <li>
          <FontAwesomeIcon icon={faUserGroup} />
          108 seguidores
        </li>
      </ul>
    </ProfileDetails>
  </ProfileContainer>
)
