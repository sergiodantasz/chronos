import { useReducer } from 'react'

import { initialTaskState } from './initialTaskState'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)
  return <TaskContext value={{ state, dispatch }}>{children}</TaskContext>
}
