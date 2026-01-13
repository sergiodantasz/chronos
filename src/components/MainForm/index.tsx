import { useRef } from 'react'

import type { Task } from '../../models/Task'

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { getNextCycle, getNextCycleType } from '../../utils/cycles'

import { PlayCircleIcon } from 'lucide-react'

import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'

import styles from './styles.module.css'

export const MainForm = () => {
  const { setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!taskNameInput.current) return
    const taskName = taskNameInput.current.value.trim()
    if (!taskName) return
    setState((prevState) => {
      const nextCycle = getNextCycle(prevState.currentCycle)
      const nextCycleType = getNextCycleType(nextCycle)
      const newTask: Task = {
        id: Date.now().toString(),
        name: taskName,
        duration: prevState.config[nextCycleType],
        startedAt: Date.now(),
        completedAt: null,
        interruptedAt: null,
        type: nextCycleType,
      }
      const secondsRemaining = newTask.duration * 60
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        secondsRemaining,
        activeTask: newTask,
        currentCycle: nextCycle,
      }
    })
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleCreateNewTask}
      action=''
    >
      <div className={styles.formRow}>
        <DefaultInput
          id='input'
          labelText='Task'
          type='text'
          ref={taskNameInput}
        />
      </div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.formRow}>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  )
}
