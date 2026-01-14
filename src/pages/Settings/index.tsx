import { MainTemplate } from '../../templates/MainTemplate'

import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { DefaultInput } from '../../components/DefaultInput'
import { Heading } from '../../components/Heading'

import { SaveIcon } from 'lucide-react'

import styles from './styles.module.css'

export const Settings = () => {
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
          className={styles.form}
        >
          <div className={styles.formRow}>
            <DefaultInput
              id='focusTime'
              labelText='Focus:'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short break:'
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id='longBreakTime'
              labelText='Long break:'
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
