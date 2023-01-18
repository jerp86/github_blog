import { SearchHeader, SearchInputContainer } from './styles'

export const SearchInput = () => (
  <SearchInputContainer>
    <SearchHeader>
      <h3>Publicações</h3>
      <span>6 publicações</span>
    </SearchHeader>

    <input type="text" placeholder="Buscar conteúdo" />
  </SearchInputContainer>
)
