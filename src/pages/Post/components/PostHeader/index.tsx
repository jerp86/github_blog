import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Info } from '../../../../components/Info'
import { PostHeaderContainer } from './styles'

export const PostHeader = () => {
  const navigate = useNavigate()

  const tag = [
    { icon: faGithub, text: 'jerp86' },
    { icon: faCalendarDay, text: 'Há 1 dia' },
    { icon: faComment, text: '5 comentários' },
  ]

  const handleGoBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          variant="iconLeft"
          as="button"
          onClick={handleGoBack}
        >
          Voltar
        </ExternalLink>
        <ExternalLink
          href="https://github.com/jerp86"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no Github
        </ExternalLink>
      </header>

      <h1>JavaScript data types and data structures</h1>

      <Info tag={tag} />
    </PostHeaderContainer>
  )
}
