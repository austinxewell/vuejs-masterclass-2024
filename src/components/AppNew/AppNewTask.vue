<script setup lang="ts">
import type { CreateNewTask } from '@/types/CreateNewForm'
import { FormKit } from '@formkit/vue'

const sheetOpen = defineModel<boolean>()

const createTask = async (formData: CreateNewTask) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(formData))
    }, 2000)
  })
}
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Task</SheetTitle>
      </SheetHeader>

      <FormKit type="form" @submit="createTask" submit-label="Create Task">
        <FormKit label="Name" placeholder="My New Task" />
        <FormKit
          type="select"
          name="for"
          label="For"
          placeholder="Select a User"
          :options="[{ label: 'Item name', value: 1 }]"
        />
        <FormKit
          type="textarea"
          name="description"
          label="Description"
          placeholder="Task Description"
        />
        <FormKit
          type="select"
          name="project"
          id="project"
          label="Project"
          placeholder="Select a Project"
          :options="[{ label: 'Item name', value: 1 }]"
        />
      </FormKit>
    </SheetContent>
  </Sheet>
</template>
