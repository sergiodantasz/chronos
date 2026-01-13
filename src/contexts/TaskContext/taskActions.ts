import type { Task } from '../../models/Task'

export type TaskActionTypes = 'START_TASK' | 'INTERRUPT_TASK' | 'RESET_STATE'

type TaskActionWithPayload = {
  type: Exclude<TaskActionTypes, 'INTERRUPT_TASK' | 'RESET_STATE'>
  payload: Task
}

type TaskActionWithoutPayload = {
  type: Exclude<TaskActionTypes, 'START_TASK'>
}

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload
