import { useEffect, useState } from 'react'

import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'

import styles from './styles.module.css'

type Themes = 'dark' | 'light'

const nextThemeIcons = {
  dark: <MoonIcon />,
  light: <SunIcon />,
}

export const Menu = () => {
  const [theme, setTheme] = useState<Themes>(() => {
    return (localStorage.getItem('theme') as Themes) || 'dark'
  })

  const handleTheme = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Home'
        title='Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='History'
        title='History'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href=''
        aria-label='Toggle theme'
        title='Toggle theme'
        onClick={handleTheme}
      >
        {nextThemeIcons[theme]}
      </a>
    </nav>
  )
}
