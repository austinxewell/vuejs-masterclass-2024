<script setup lang="ts">
import { FormKit } from '@formkit/vue'

const sheetOpen = defineModel<boolean>()
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Task</SheetTitle>
      </SheetHeader>

      <FormKit type="text" />
    </SheetContent>
  </Sheet>
</template>
