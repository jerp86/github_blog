# Desafio 03 - Github Blog

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#art-layout-no-figma">Figma</a>&nbsp;|&nbsp;
</h3>
<h3 align="center">
  <a href="#rainbow-documenta%C3%A7%C3%A3o-de-cores">Cores</a>&nbsp;|&nbsp;
  <a href="#abc-fontes-utilizadas">Fontes</a>&nbsp;|&nbsp;
  <a href="#zap-como-executar">Executar</a>&nbsp;|&nbsp;
  <a href="#memo-licen%C3%A7a">Licença</a>
</h3>

---


## :information_source: Sobre

Nesse módulo foi praticado a utilização de clientes HTTP consumindo a API do [Github](https://github.com/) para criar um blog pessoal.

A aplicação desenvolvida que utilizará da API do GitHub para buscar issues de um repositório, dados do meu perfil e exibir como um blog.

- Listagem do perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela
- Criar uma página para exibir um post (issue) completo

Apesar de serem poucas funcionalidades, foi revisto conceitos como:

- Fetch / Axios
- Roteamento e React Router DOM
- Formulários

Para completar esse desafio foi preciso fazer alguns preparativos e principalmente algumas pesquisas para entender sobre a API do GitHub.


## :interrobang: Motivo

Reinicio dos estudos do bootcamp Ignite ReactJS da Rocketseat.

Como se tratou de um desafio, foi necessário alguns conhecimentos além dos abordados nesse módulo.


## :rocket: Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/)
- [Json-Server](https://github.com/typicode/json-server)
- [Font Awesome](https://fontawesome.com/)
- [React-Hook-Form](https://www.react-hook-form.com/)
- [React-Router-Dom](https://github.com/remix-run/react-router#readme)
- [Styled-Components](https://styled-components.com/) 💅🏽
- [Zod](https://github.com/colinhacks/zod)
- [@rocketseat/eslint-config](https://github.com/rocketseat/eslint-config-rocketseat#readme)


## :art: Layout no Figma

Para essa aplicação foi fornecido um layout para que fosse possível seguir e implementar todas as funcionalidades desenhadas no #Figma.

[Github Blog](https://www.figma.com/community/file/1138814951106121051)


## :rainbow: Documentação de cores

| Cor        | Hexadecimal |
| ---------- | ----------- |
| blue       | #3294F8     |
| white      | #FFFFFF     |
| title      | #E7EDF4     | 
| subtitle   | #C4D4E3     | 
| text       | #AFC2D4     | 
| span       | #7B96B2     | 
| label      | #3A536B     | 
| border     | #1C2F41     | 
| post       | #112131     | 
| profile    | #0B1B2B     | 
| background | #071422     | 
| input      | #040F1A     |


## :abc: Fontes utilizadas

- [Nunito](https://fonts.google.com/specimen/Nunito)


## :zap: Como executar

- Clone o projeto:
```
git clone https://github.com/jerp86/github_blog.git
```

- Acesse a pasta clonada:
```
cd github_blog
```

- Instale as dependências:
```
npm ci
```

- Inicie a fake API e o projeto:
```
npm run dev
```


## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
  Feito por Jerp86 👋️
</h4>
<h5 align="center">
  <a href="mailto:jerp.dev@gmail.com">Entre em contato!</a>
</h5>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="Perfil do Linkedin de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  &nbsp
  <a href="https://twitter.com/jerpbtu">
    <img alt="Perfil do Twitter de José Eduardo Rodrigues Pinto" src="https://img.shields.io/twitter/follow/jerpbtu?style=flat&logoColor=white&logo=Twitter">
  </a>
</p>
