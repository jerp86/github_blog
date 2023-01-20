import { IPost } from '../../../../context/GithubContext'
import { PostFromListContainer, PostFromListHeader } from './styles'

interface PostFromListProps {
  post: IPost
}

export const PostFromList = ({ post }: PostFromListProps) => (
  <PostFromListContainer to={`/post/${post.number}`}>
    <PostFromListHeader>
      <h2>{post.title}</h2>
      <span>{String(post.created_at)}</span>
    </PostFromListHeader>

    <p>{post.body}</p>
  </PostFromListContainer>
)
