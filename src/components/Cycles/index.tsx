import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { getNextCycle, getNextCycleType } from '../../utils/cycles'

import styles from './styles.module.css'

const cycleDescriptionMap = {
  focusTime: 'Focus',
  shortBreakTime: 'Short break',
  longBreakTime: 'Long break',
}

export const Cycles = () => {
  const { state } = useTaskContext()
  const cycleSteps = Array.from({ length: state.currentCycle })
  return (
    <div className={styles.cycles}>
      <span>Cycles:</span>
      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index)
          const nextCycleType = getNextCycleType(nextCycle)
          return (
            <span
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`${cycleDescriptionMap[nextCycleType]} cycle indicator`}
              title={`${cycleDescriptionMap[nextCycleType]} cycle indicator`}
              // eslint-disable-next-line react-x/no-array-index-key
              key={index}
            ></span>
          )
        })}
      </div>
    </div>
  )
}
