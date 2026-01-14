import { MainTemplate } from '../../templates/MainTemplate'

import { Container } from '../../components/Container'
import { GenericHtml } from '../../components/GenericHtml'
import { Heading } from '../../components/Heading'
import { RouterLink } from '../../components/RouterLink'

export const NotFound = () => {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Page Not Found 🚀</Heading>
          <p>
            Oops! It looks like the page you're trying to access doesn't exist. Maybe it went on vacation, decided to
            explore the universe, or got lost somewhere between two black holes. 🌌
          </p>
          <p>
            But don't worry, you're not lost in space (yet). You can safely head back to the{' '}
            <RouterLink to='/'>home page</RouterLink> or <RouterLink to='/history'>the history page</RouterLink> — or
            you can stay here and pretend you've found a secret page that only the coolest explorers can access. 🧭✨
          </p>
          <p>
            If you think this page should exist (or if you just want to chat about time travel and wormholes), feel free
            to get in touch. Otherwise, use the menu to return to the real world.
          </p>
          <p>
            In the meantime, here's a thought: “If a page doesn't exist on the internet, did it ever really exist?” 🤔💭
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  )
}
