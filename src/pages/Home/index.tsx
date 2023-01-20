import { useContextSelector } from 'use-context-selector'
import { Spinner } from '../../components'
import { GithubContext } from '../../context/GithubContext'
import { PostFromList, Profile, SearchInput } from './components'
import { PostsListContainer } from './styles'

export const Home = () => {
  const { isLoading, posts } = useContextSelector(
    GithubContext,
    ({ isLoading, posts }) => ({
      isLoading,
      posts,
    }),
  )

  return (
    <>
      <Profile />
      <SearchInput numberOfPosts={posts.length} />

      <PostsListContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          posts.map((post) => <PostFromList key={post.number} post={post} />)
        )}
      </PostsListContainer>
    </>
  )
}
