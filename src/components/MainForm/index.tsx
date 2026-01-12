import { Cycles } from '../Cycles'
import { DefaultInput } from '../DefaultInput'

import styles from './styles.module.css'

export const MainForm = () => {
  return (
    <form
      className={styles.form}
      action=''
    >
      <div className={styles.formRow}>
        <DefaultInput
          id='input'
          labelText='Task'
          type='text'
        />
      </div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
    </form>
  )
}
