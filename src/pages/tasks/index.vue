<script setup lang="ts">
import { useTaskStore } from '@/stores/loaders/tasks'
import { columns } from '@/utils/tableColumns/tasksColumns'

const taskStore = useTaskStore()
const { tasks } = storeToRefs(taskStore)
const { getTasks } = taskStore

usePageStore().pageData.title = 'My Tasks'

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
