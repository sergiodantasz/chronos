import { useEffect, useState } from 'react'

import { MainTemplate } from '../../templates/MainTemplate'

import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { Heading } from '../../components/Heading'

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

import { formatDate } from '../../utils/date'
import { getTaskStatus, sortTasks, type SortTasksOptions } from '../../utils/task'

import { showMessage } from '../../adapters/message'

import { TrashIcon } from 'lucide-react'

import styles from './styles.module.css'

const taskTypeDictionary = {
  focusTime: 'Focus',
  shortBreakTime: 'Short break',
  longBreakTime: 'Long break',
}

export const History = () => {
  useEffect(() => {
    document.title = 'History - Chronos'
  }, [])

  const { state, dispatch } = useTaskContext()
  const hasTasks = state.tasks.length > 0
  const [confirmClearHistory, setConfirmClearHistory] = useState(false)
  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(() => {
    return {
      tasks: sortTasks({ tasks: state.tasks }),
      field: 'startedAt',
      direction: 'desc',
    }
  })

  useEffect(() => {
    setSortTaskOptions((prevState) => ({
      ...prevState,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }))
  }, [state.tasks])

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection = sortTaskOptions.direction === 'desc' ? 'asc' : 'desc'
    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    })
  }

  useEffect(() => {
    if (!confirmClearHistory) return
    dispatch({ type: 'RESET_STATE' })
  }, [confirmClearHistory, dispatch])

  useEffect(() => {
    return () => {
      showMessage.dismiss()
    }
  }, [])

  function handleClearHistory() {
    showMessage.dismiss()
    showMessage.confirm('Are you sure you want to delete your history?', (reason) => {
      setConfirmClearHistory(reason)
    })
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          {hasTasks && (
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color='red'
                aria-label='Clear history'
                title='Clear history'
                onClick={handleClearHistory}
              />
            </span>
          )}
        </Heading>
      </Container>
      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                {hasTasks ?
                  <>
                    <th
                      className={styles.thSort}
                      onClick={() => {
                        handleSortTasks({ field: 'name' })
                      }}
                    >
                      Task
                    </th>
                    <th
                      className={styles.thSort}
                      onClick={() => {
                        handleSortTasks({ field: 'duration' })
                      }}
                    >
                      Duration
                    </th>
                    <th
                      className={styles.thSort}
                      onClick={() => {
                        handleSortTasks({ field: 'startedAt' })
                      }}
                    >
                      Date
                    </th>
                  </>
                : <>
                    <th>Task</th>
                    <th>Duration</th>
                    <th>Date</th>
                  </>
                }
                <th>Status</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {hasTasks ?
                sortTaskOptions.tasks.map((task) => {
                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.duration} min</td>
                      <td>{formatDate(task.startedAt)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  )
                })
              : <tr>
                  <td colSpan={5}>No tasks were added.</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  )
}
