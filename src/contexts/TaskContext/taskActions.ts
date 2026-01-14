import type { Task } from '../../models/Task'
import type { TaskState } from '../../models/TaskState'

type TaskActionWithPayload =
  | {
      type: 'START_TASK'
      payload: Task
    }
  | {
      type: 'COUNT_DOWN'
      payload: Pick<TaskState, 'secondsRemaining'>
    }
  | {
      type: 'CHANGE_SETTINGS'
      payload: TaskState['config']
    }

type TaskActionWithoutPayload = {
  type: 'RESET_STATE' | 'INTERRUPT_TASK' | 'COMPLETE_TASK'
}

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload
