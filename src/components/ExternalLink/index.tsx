import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'
import { ExternalLinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  icon: IconDefinition
}

export const ExternalLink = ({
  children,
  icon,
  ...rest
}: ExternalLinkProps) => (
  <ExternalLinkContainer {...rest}>
    {children}

    <FontAwesomeIcon icon={icon} />
  </ExternalLinkContainer>
)
