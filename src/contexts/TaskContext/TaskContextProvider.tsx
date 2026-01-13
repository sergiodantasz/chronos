import { useState } from 'react'

import { initialTaskState } from './initialTaskState'
import { TaskContext } from './TaskContext'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, setState] = useState(initialTaskState)
  return <TaskContext value={{ state, setState }}>{children}</TaskContext>
}
