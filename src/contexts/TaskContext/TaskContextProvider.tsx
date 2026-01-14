import { useEffect, useReducer } from 'react'

import { TimerWorkerManager } from '../../workers/timerWorkerManager'
import { initialTaskState } from './initialTaskState'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)
  const worker = TimerWorkerManager.getInstance()
  worker.onmessage((e: MessageEvent) => {
    const countDownSeconds = e.data
    console.log(countDownSeconds)
    if (countDownSeconds <= 0) {
      dispatch({ type: 'COMPLETE_TASK' })
      console.log('worker completed')
      worker.terminate()
    } else {
      dispatch({
        type: 'COUNT_DOWN',
        payload: { secondsRemaining: countDownSeconds },
      })
    }
  })
  useEffect(() => {
    if (!state.activeTask) {
      console.log('worker terminated')
      worker.terminate()
    } else {
      worker.postMessage(state)
    }
  }, [worker, state])
  return <TaskContext value={{ state, dispatch }}>{children}</TaskContext>
}
