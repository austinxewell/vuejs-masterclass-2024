import { taskQuery, tasksWithProjectsQuery } from '@/utils/supaQueries'
import type { Task, TasksWithProjects } from '@/utils/supaQueries'

export const useTaskStore = defineStore('tasks-store', () => {
  const tasks = ref<TasksWithProjects | null>(null)
  const task = ref<Task | null>(null)

  const getTasks = async () => {
    const { data, error, status } = await tasksWithProjectsQuery

    if (error) useErrorStore().setError({ error, customCode: status })

    tasks.value = data
  }

  const getSingleTask = async (id: string) => {
    const { data, error, status } = await taskQuery(id)

    if (error) useErrorStore().setError({ error, customCode: status })

    task.value = data
  }

  return {
    tasks,
    getTasks,
    task,
    getSingleTask,
  }
})
