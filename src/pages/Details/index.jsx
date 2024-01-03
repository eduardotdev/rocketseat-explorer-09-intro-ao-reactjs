import { Container, Content, Links } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque
            inventore facilis id, mollitia quibusdam quis quos nam accusamus
            reiciendis excepturi nulla deserunt. Iusto sint pariatur ea nulla
            veniam minus?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat/com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat/com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}
