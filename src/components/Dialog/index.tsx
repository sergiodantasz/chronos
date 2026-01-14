import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import type { ToastContentProps } from 'react-toastify'

import { DefaultButton } from '../DefaultButton'

import styles from './styles.module.css'

export const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonsContainer}>
          <DefaultButton
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label='Confirm action and close'
            title='Confirm action and close'
          />
          <DefaultButton
            onClick={() => closeToast(false)}
            icon={<ThumbsDownIcon />}
            color='red'
            aria-label='Confirm action and close'
            title='Confirm action and close'
          />
        </div>
      </div>
    </>
  )
}
