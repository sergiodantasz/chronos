import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { getNextCycle, getNextCycleType } from '../../utils/cycles'

export const Tip = () => {
  const { state } = useTaskContext()
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCyleType = getNextCycleType(nextCycle)

  const tips = {
    activeTask: {
      focusTime: (
        <span>
          Focus for <b>{state.config.focusTime} minute(s)</b>.
        </span>
      ),
      shortBreakTime: (
        <span>
          Take a <b>{state.config.shortBreakTime}-minute</b> break.
        </span>
      ),
      longBreakTime: (
        <span>
          Awesome! Take a <b>{state.config.longBreakTime}-minute</b> break.
        </span>
      ),
    },
    noActiveTask: {
      focusTime: (
        <span>
          The next cycle lasts <b>{state.config.focusTime} minute(s)</b>.
        </span>
      ),
      shortBreakTime: (
        <span>
          The next cycle lasts <b>{state.config.shortBreakTime} minute(s)</b>.
        </span>
      ),
      longBreakTime: (
        <span>
          The next cycle lasts <b>{state.config.longBreakTime} minute(s)</b>.
        </span>
      ),
    },
  }

  return <>{state.activeTask ? tips['activeTask'][state.activeTask.type] : tips['noActiveTask'][nextCyleType]}</>
}
