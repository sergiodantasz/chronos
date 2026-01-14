import { useLayoutEffect } from 'react'

import { AboutPomodoro } from '../../pages/AboutPomodoro'
import { History } from '../../pages/History'
import { Home } from '../../pages/Home'
import { NotFound } from '../../pages/NotFound'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return null
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/history/'
          element={<History />}
        />
        <Route
          path='/about-pomodoro/'
          element={<AboutPomodoro />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}
