import { taskQuery, tasksWithProjectsQuery, updateTaskQuery } from '@/utils/supaQueries'
import type { Task, TasksWithProjects } from '@/utils/supaQueries'
import { useMemoize } from '@vueuse/core'

export const useTaskStore = defineStore('tasks-store', () => {
  const tasks = ref<TasksWithProjects | null>(null)
  const task = ref<Task | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loadTasks = useMemoize(async (key: string) => await tasksWithProjectsQuery)
  const loadTask = useMemoize(async (id: string) => await taskQuery(id))

  const getTasks = async () => {
    const { data, error, status } = await loadTasks('tasks')

    if (error) useErrorStore().setError({ error, customCode: status })

    tasks.value = data
  }

  const getSingleTask = async (id: string) => {
    const { data, error, status } = await loadTask(id)

    if (error) useErrorStore().setError({ error, customCode: status })

    task.value = data
  }

  const updateTask = async () => {
    if (!task.value) return

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { projects, id, ...taskProperties } = task.value

    await updateTaskQuery(taskProperties, task.value.id)
  }

  return {
    tasks,
    getTasks,
    task,
    getSingleTask,
    updateTask,
  }
})
