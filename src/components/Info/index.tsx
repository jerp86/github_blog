import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoContainer } from './styles'

interface Tag {
  icon: IconDefinition
  text: string
}

interface InfoProps {
  tag: Tag[]
}

export const Info = ({ tag }: InfoProps) => (
  <InfoContainer>
    {tag.map(({ icon, text }) => (
      <li key={crypto.randomUUID()}>
        <FontAwesomeIcon icon={icon} />
        {text}
      </li>
    ))}
  </InfoContainer>
)
