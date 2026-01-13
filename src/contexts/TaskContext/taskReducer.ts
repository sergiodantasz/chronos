import type { TaskState } from '../../models/TaskState'

import { getNextCycle } from '../../utils/cycles'

import type { TaskActionModel } from './taskActions'

export function taskReducer(state: TaskState, action: TaskActionModel) {
  switch (action.type) {
    case 'START_TASK': {
      const newTask = action.payload
      const nextCycle = getNextCycle(state.currentCycle)
      const secondsRemaining = newTask.duration * 60
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        secondsRemaining,
        activeTask: newTask,
        currentCycle: nextCycle,
      }
    }
    case 'INTERRUPT_TASK': {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptedAt: Date.now() }
          }
          return task
        }),
        secondsRemaining: 0,
        activeTask: null,
      }
    }
  }
  return state
}
