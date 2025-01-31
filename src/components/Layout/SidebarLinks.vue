<script lang="ts" setup>
interface LinkProp {
  title: string
  to?: string
  icon: string
}

const props = defineProps<{
  links: LinkProp[]
}>()

const emits = defineEmits<{
  (event: 'actionClicked', title: string): void
}>()

const emitActionClicked = (linkTitle: string) => {
  emits('actionClicked', linkTitle)
}
</script>

<template>
  <template v-for="link in links" :key="link.title">
    <RouterLink
      v-if="link.to"
      exactActiveClass="text-primary bg-muted"
      :to="link.to"
      class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary text-muted-foreground"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </RouterLink>

    <div v-else class="nav-link cursor-pointer" @click="emitActionClicked(link.title)">
      <iconify-icon :icon="link.icon"></iconify-icon>
      <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
    </div>
  </template>
</template>

<style scoped>
.nav-link {
  @apply flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary text-muted-foreground;
}
</style>
