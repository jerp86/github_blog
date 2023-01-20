import { PostFromList, Profile, SearchInput } from './components'
import { PostsListContainer } from './styles'

export const Home = () => (
  <>
    <Profile />
    <SearchInput />

    <PostsListContainer>
      <PostFromList />
      <PostFromList />
      <PostFromList />
      <PostFromList />
      <PostFromList />
      <PostFromList />
    </PostsListContainer>
  </>
)
