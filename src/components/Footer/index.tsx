import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href=''>Understand how the Pomodoro Technique works.</a>
      <a href=''>&copy; {new Date().getFullYear()} Sérgio Dantas. All rights reserved.</a>
    </footer>
  )
}
