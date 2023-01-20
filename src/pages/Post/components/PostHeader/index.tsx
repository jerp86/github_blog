import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { ExternalLink, Info } from '../../../../components'
import { IPost } from '../../../../context/GithubContext'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostHeaderContainer } from './styles'

interface PostHeaderProps {
  postData: IPost
}

export const PostHeader = ({ postData }: PostHeaderProps) => {
  const navigate = useNavigate()
  const handleGoBack = useCallback(() => navigate(-1), [navigate])

  const tag = useMemo(
    () => [
      { icon: faGithub, text: postData.user.login },
      { icon: faCalendarDay, text: relativeDateFormatter(postData.created_at) },
      { icon: faComment, text: `${postData.comments} comentários` },
    ],
    [postData],
  )

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
          href={postData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no Github
        </ExternalLink>
      </header>

      <h1>{postData.title}</h1>

      <Info tag={tag} />
    </PostHeaderContainer>
  )
}
