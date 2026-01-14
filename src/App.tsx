import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'

import { MainRouter } from './routers/MainRouter'

export const App = () => {
  return (
    <TaskContextProvider>
      <MainRouter />
    </TaskContextProvider>
  )
}
