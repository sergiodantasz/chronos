import { useEffect } from 'react'

import { MainTemplate } from '../../templates/MainTemplate'

import { Container } from '../../components/Container'
import { CountDown } from '../../components/CountDown'
import { MainForm } from '../../components/MainForm'

export const Home = () => {
  useEffect(() => {
    document.title = 'Chronos'
  }, [])

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}
