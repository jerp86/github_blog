import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoContainer } from './styles'

export const Info = () => (
  <InfoContainer>
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
  </InfoContainer>
)
