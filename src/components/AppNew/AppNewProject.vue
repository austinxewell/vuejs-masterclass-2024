<script setup lang="ts">
const sheetOpen = defineModel<boolean>()
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create New Project</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
