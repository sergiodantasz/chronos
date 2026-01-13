import type { TaskState } from '../../models/TaskState'

export const initialTaskState: TaskState = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
}
