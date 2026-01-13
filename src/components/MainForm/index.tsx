import { useRef } from 'react'

import type { Task } from '../../models/Task'

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { PlayCircleIcon } from 'lucide-react'

import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'

import styles from './styles.module.css'

export const MainForm = () => {
  const { setState } = useTaskContext()
  const taskNameInputRef = useRef<HTMLInputElement>(null)

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!taskNameInputRef.current) return
    const taskName = taskNameInputRef.current.value.trim()
    if (!taskName) return
    const newTask: Task = {
      id: Date.now().toString(),
      name: taskName,
      duration: 1,
      startedAt: Date.now(),
      completedAt: null,
      interruptedAt: null,
      type: 'focusTime',
    }
    const secondsRemaining = newTask.duration * 60
    setState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        activeTask: newTask,
        currentCycle: 1,
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
          ref={taskNameInputRef}
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
