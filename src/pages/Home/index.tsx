import { PostFromList } from './components/PostFromList'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
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
