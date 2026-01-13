import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { formatTime } from '../../utils/time'

import styles from './styles.module.css'

export const CountDown = () => {
  const { state } = useTaskContext()
  return <div className={styles.container}>{formatTime(state.secondsRemaining)}</div>
}
