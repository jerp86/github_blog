import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ReactNode } from 'react'
import { ExternalLinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  icon?: ReactNode
  variant?: 'iconLeft'
}

export const ExternalLink = ({
  children,
  icon,
  ...rest
}: ExternalLinkProps) => (
  <ExternalLinkContainer {...rest}>
    {children}

    {icon ?? <FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
  </ExternalLinkContainer>
)
