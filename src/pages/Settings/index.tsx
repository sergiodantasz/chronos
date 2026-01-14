import { useRef } from 'react'

import { MainTemplate } from '../../templates/MainTemplate'

import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { DefaultInput } from '../../components/DefaultInput'
import { Heading } from '../../components/Heading'

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { showMessage } from '../../adapters/message'

import { SaveIcon } from 'lucide-react'

import styles from './styles.module.css'

export const Settings = () => {
  const { state } = useTaskContext()
  const focusTimeInput = useRef<HTMLInputElement>(null)
  const shortBreakTimeInput = useRef<HTMLInputElement>(null)
  const longBreakTimeInput = useRef<HTMLInputElement>(null)

  const handleSaveSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    showMessage.dismiss()

    const formErrors: string[] = []

    const focusTime = Number(focusTimeInput.current?.value)
    const shortBreakTime = Number(shortBreakTimeInput.current?.value)
    const longBreakTime = Number(longBreakTimeInput.current?.value)

    if (isNaN(focusTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Please enter only numbers for all fields.')
    }
    if (focusTime < 1 || focusTime > 120) {
      formErrors.push('Enter values between 1 and 120 for focus.')
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Enter values between 1 and 30 for short break.')
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Enter values between 1 and 60 for long break.')
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error)
      })
      return
    }
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
              min={1}
              max={120}
              required
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short break:'
              type='number'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              min={1}
              max={30}
              required
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='longBreakTime'
              labelText='Long break:'
              type='number'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              min={1}
              max={60}
              required
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
