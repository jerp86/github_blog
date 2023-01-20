import { SearchHeader, SearchInputContainer } from './styles'

interface SearchInputProps {
  numberOfPosts: number
}

export const SearchInput = ({ numberOfPosts }: SearchInputProps) => (
  <SearchInputContainer>
    <SearchHeader>
      <h3>Publicações</h3>
      <span>{numberOfPosts} publicações</span>
    </SearchHeader>

    <input type="text" placeholder="Buscar conteúdo" />
  </SearchInputContainer>
)
