import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { HomeContainer } from './styles'

export const Home = () => (
  <HomeContainer>
    <Profile />
    <SearchInput />
  </HomeContainer>
)
