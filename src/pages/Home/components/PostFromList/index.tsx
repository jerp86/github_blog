import { IPost } from '../../../../context/GithubContext'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostFromListContainer, PostFromListHeader } from './styles'

interface PostFromListProps {
  post: IPost
}

export const PostFromList = ({ post }: PostFromListProps) => (
  <PostFromListContainer to={`/post/${post.number}`}>
    <PostFromListHeader>
      <h2>{post.title}</h2>
      <span>{relativeDateFormatter(post.created_at)}</span>
    </PostFromListHeader>

    <p>{post.body}</p>
  </PostFromListContainer>
)
