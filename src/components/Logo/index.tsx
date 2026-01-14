import { TimerIcon } from 'lucide-react'

import { RouterLink } from '../RouterLink'

import styles from './styles.module.css'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink
        className={styles.logoLink}
        to='/'
      >
        <TimerIcon />
        <span>Cronos</span>
      </RouterLink>
    </div>
  )
}
