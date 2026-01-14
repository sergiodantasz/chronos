import { useEffect, useReducer, useRef } from 'react'

import { loadBeep } from '../../utils/audio'
import { formatTime } from '../../utils/time'

import { TimerWorkerManager } from '../../workers/timerWorkerManager'
import { initialTaskState } from './initialTaskState'
import { TaskContext } from './TaskContext'
import { taskReducer } from './taskReducer'

type TaskContextProviderProps = {
  children: React.ReactNode
}

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState)
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null)
  const worker = TimerWorkerManager.getInstance()

  useEffect(() => {
    worker.onmessage((e: MessageEvent) => {
      const countDownSeconds = e.data

      if (countDownSeconds <= 0) {
        playBeepRef.current?.()
        playBeepRef.current = null
        dispatch({ type: 'COMPLETE_TASK' })
        worker.terminate()
      } else {
        dispatch({
          type: 'COUNT_DOWN',
          payload: { secondsRemaining: countDownSeconds },
        })
      }
    })
  }, [worker])

  useEffect(() => {
    if (!state.activeTask) {
      worker.terminate()
    } else {
      worker.postMessage(state)
    }
    document.title = `${formatTime(state.secondsRemaining)} - Chronos`
  }, [worker, state])

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep()
    } else {
      playBeepRef.current = null
    }
  }, [state.activeTask])

  return <TaskContext value={{ state, dispatch }}>{children}</TaskContext>
}
