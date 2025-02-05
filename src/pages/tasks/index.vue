<script setup lang="ts">
import { useTaskStore } from '@/stores/loaders/tasks'
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'My Tasks'

const taskStore = useTaskStore()

const { tasks } = storeToRefs(taskStore)
const { getTasks } = taskStore

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
