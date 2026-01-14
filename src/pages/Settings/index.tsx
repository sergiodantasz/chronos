import { useRef } from 'react'

import { MainTemplate } from '../../templates/MainTemplate'

import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { DefaultInput } from '../../components/DefaultInput'
import { Heading } from '../../components/Heading'

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { SaveIcon } from 'lucide-react'

import styles from './styles.module.css'

export const Settings = () => {
  const { state } = useTaskContext()
  const focusTimeInput = useRef<HTMLInputElement>(null)
  const shortBreakTimeInput = useRef<HTMLInputElement>(null)
  const longBreakTimeInput = useRef<HTMLInputElement>(null)

  const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const focusTime = focusTimeInput.current?.value
    const shortBreakTime = shortBreakTimeInput.current?.value
    const longBreakTime = longBreakTimeInput.current?.value

    console.log(focusTime, shortBreakTime, longBreakTime)
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Settings</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>Modify the focus and break time settings.</p>
      </Container>
      <Container>
        <form
          action=''
          onSubmit={handleSaveSettings}
          className={styles.form}
        >
          <div className={styles.formRow}>
            <DefaultInput
              id='focusTime'
              labelText='Focus:'
              type='number'
              ref={focusTimeInput}
              defaultValue={state.config.focusTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short break:'
              type='number'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='longBreakTime'
              labelText='Long break:'
              type='number'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Save settings'
              title='Save settings'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  )
}
