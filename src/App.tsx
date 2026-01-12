import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'

import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form
          className='form'
          action=''
        >
          <div className='formRow'>
            <DefaultInput
              id='input'
              labelText='Task'
              type='text'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<PlayCircleIcon />}
              color='green'
            />
            <DefaultButton
              icon={<StopCircleIcon />}
              color='red'
            />
          </div>
        </form>
      </Container>
    </>
  )
}
