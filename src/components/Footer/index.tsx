import { RouterLink } from '../RouterLink'

import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <RouterLink to='/about-pomodoro/'>Understand how the Pomodoro Technique works.</RouterLink>
      <a
        href='https://github.com/sergiodantasz/chronos'
        target='_blank'
      >
        &copy; {new Date().getFullYear()} Sérgio Dantas. All rights reserved.
      </a>
    </footer>
  )
}
