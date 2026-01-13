import type { TaskState } from './TaskState'

export type Task = {
  id: string
  name: string
  duration: number
  startedAt: number
  completedAt: number | null
  interruptedAt: number | null
  type: keyof TaskState['config']
}
