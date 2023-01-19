import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { Info } from '../../../../components/Info'
import { PostHeaderContainer } from './styles'

export const PostHeader = () => {
  const tag = [
    { icon: faGithub, text: 'jerp86' },
    { icon: faCalendarDay, text: 'Há 1 dia' },
    { icon: faComment, text: '5 comentários' },
  ]

  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink icon={faChevronLeft} variant="left" href="#">
          Voltar
        </ExternalLink>
        <ExternalLink
          icon={faArrowUpRightFromSquare}
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
