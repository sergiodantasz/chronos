import { useRef } from 'react'

import type { Task } from '../../models/Task'

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { getNextCycle, getNextCycleType } from '../../utils/cycles'

import { showMessage } from '../../adapters/message'

import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'

import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { Tip } from '../Tip'

import styles from './styles.module.css'

export const MainForm = () => {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || ''

  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    showMessage.dismiss()
    if (!taskNameInput.current) return
    const taskName = taskNameInput.current.value.trim()
    if (!taskName) {
      showMessage.warn('The task name is empty.')
      return
    }
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)
    const newTask: Task = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startedAt: Date.now(),
      completedAt: null,
      interruptedAt: null,
      type: nextCycleType,
    }
    dispatch({ type: 'START_TASK', payload: newTask })
    showMessage.success('The task was started.')
  }

  const handleInterruptTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    showMessage.dismiss()
    showMessage.error('The task was interrupted.')
    dispatch({ type: 'INTERRUPT_TASK' })
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
          labelText='Task:'
          type='text'
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>
      <div className={styles.formRow}>
        <Tip />
      </div>
      {state.currentCycle > 0 && (
        <div className={styles.formRow}>
          <Cycles />
        </div>
      )}
      <div className='formRow'>
        {!state.activeTask ?
          <DefaultButton
            aria-label='Start new task'
            title='Start new task'
            type='submit'
            icon={<PlayCircleIcon />}
          />
        : <DefaultButton
            aria-label='Interrupt current task'
            title='Interrupt current task'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
          />
        }
      </div>
    </form>
  )
}
