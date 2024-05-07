import { Container, TypingEffect } from '../styled-components/landingPage'
import ReactTypingEffect from 'react-typing-effect'

const LandingPage = () => {
  return (
    <Container>
      <TypingEffect>
        <ReactTypingEffect
          text={[
            'Welcome to BK-parfumes',
            ' Here, you can find a variety of parfumes. To learn more click register button!'
          ]}
          speed={100}
          eraseDelay={700}
        />
      </TypingEffect>
    </Container>
  )
}

export default LandingPage
