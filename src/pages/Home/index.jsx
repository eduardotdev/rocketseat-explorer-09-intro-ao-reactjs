import { Brand, Container, Content, Menu, NewNote, Search } from './styles'

import { Header } from '../../components/Header'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu></Menu>

      <Search></Search>

      <Content></Content>

      <NewNote></NewNote>
    </Container>
  )
}
