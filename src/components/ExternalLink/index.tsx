import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps } from 'react'
import { ExternalLinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  icon: IconDefinition
  variant?: 'left' | 'right'
}

export const ExternalLink = ({
  children,
  icon,
  variant = 'right',
  ...rest
}: ExternalLinkProps) => (
  <ExternalLinkContainer {...rest}>
    {variant === 'left' && <FontAwesomeIcon icon={icon} />}

    {children}

    {variant === 'right' && <FontAwesomeIcon icon={icon} />}
  </ExternalLinkContainer>
)
