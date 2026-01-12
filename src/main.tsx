import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

import styles from './App.module.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className={styles.app}>pi</div>
  </StrictMode>,
)
