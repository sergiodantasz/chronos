import type { Task } from '../models/Task'

export function getTaskStatus(task: Task, activeTask: Task | null) {
  if (task.completedAt) return 'Completed'
  if (task.interruptedAt) return 'Interrupted'
  if (task.id === activeTask?.id) return 'In progress'
  return 'Abandoned'
}

export type SortTasksOptions = {
  tasks: Task[]
  direction?: 'asc' | 'desc'
  field?: keyof Task
}

export function sortTasks({ field = 'startedAt', direction = 'desc', tasks = [] }: SortTasksOptions): Task[] {
  return [...tasks].sort((a, b) => {
    const aValue = a[field]
    const bValue = b[field]

    if (aValue === null && bValue === null) return 0
    if (aValue === null) return 1
    if (bValue === null) return -1

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc' ? aValue - bValue : bValue - aValue
    }

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
    }

    return 0
  })
}
