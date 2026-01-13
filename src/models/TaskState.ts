import type { Task } from './Task'

export type TaskState = {
  tasks: Task[]
  secondsRemaining: number
  formattedSecondsRemaining: string
  activeTask: Task | null
  currentCycle: number
  config: {
    focusTime: number
    shortBreakTime: number
    longBreakTime: number
  }
}
