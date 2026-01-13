import { Home } from './pages/Home'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

export const App = () => {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}
