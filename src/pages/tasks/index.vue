<script setup lang="ts">
import { useTaskStore } from '@/stores/loaders/tasks'
import { columns } from '@/utils/tableColumns/tasksColumns'
import { useCollabs } from '@/composables/collabs'

usePageStore().pageData.title = 'My Tasks'

const taskStore = useTaskStore()

const { tasks } = storeToRefs(taskStore)
const { getTasks } = taskStore

await getTasks()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

await getGroupedCollabs(tasks.value ?? [])

const columnsWithCollabs = columns(groupedCollabs)
</script>

<template>
  <DataTable v-if="tasks" :columns="columnsWithCollabs" :data="tasks" />
</template>

<style scoped></style>
