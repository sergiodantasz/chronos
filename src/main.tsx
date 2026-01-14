import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MessagesContainer } from './components/MessagesContainer/index.tsx'

import { App } from './App.tsx'

import './styles/global.css'
import './styles/theme.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MessagesContainer />
  </StrictMode>,
)
