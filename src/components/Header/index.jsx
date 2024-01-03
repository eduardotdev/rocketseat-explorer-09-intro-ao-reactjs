import { Container, Profile } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/eduardotdev.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Eduardo Tavares</strong>
        </div>
      </Profile>
    </Container>
  )
}
