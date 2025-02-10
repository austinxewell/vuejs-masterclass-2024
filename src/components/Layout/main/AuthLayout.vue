<script setup lang="ts">
import { menuKey } from '@/utils/injectionKeys'

const { pageData } = storeToRefs(usePageStore())

const taskSheetOpen = ref(false)
const projectSheetOpen = ref(false)

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const isMobile = ref(window.matchMedia('(max-width: 640px)').matches)

let resizeTimeout: ReturnType<typeof setTimeout> | null = null
const updateScreenSize = () => {
  if (resizeTimeout) clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    isMobile.value = window.matchMedia('(max-width: 640px)').matches
  }, 100)
}

onMounted(() => {
  window.addEventListener('resize', updateScreenSize)
  updateScreenSize()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})

const containerMargin = computed(() => {
  if (isMobile.value) return 'ml-0'
  return menuOpen.value ? 'ml-52' : 'ml-14'
})

provide(menuKey, {
  menuOpen,
  toggleMenu,
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppSidebar v-if="!isMobile" />
    <MobileNav v-else />

    <AppNewTask v-model="taskSheetOpen" />
    <AppNewProject v-model="projectSheetOpen" />

    <div class="flex flex-1 flex-col transition-[margin]" :class="containerMargin">
      <TopNavbar @task-clicked="taskSheetOpen = true" @project-clicked="projectSheetOpen = true" />
      <main class="flex-1 overflow-auto p-4 lg:gap-6 lg:p-6 pb-24">
        <div class="flex items-center pb-2 lg:pb-4">
          <h1 class="text-lg font-semibold md:text-2xl">{{ pageData.title }}</h1>
        </div>
        <slot />
      </main>
    </div>
  </div>
</template>
