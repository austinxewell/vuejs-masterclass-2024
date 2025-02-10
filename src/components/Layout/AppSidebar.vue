<script setup lang="ts">
import { menuKey } from '@/utils/injectionKeys'
import type { MenuInjectionsOptions } from '@/utils/injectionKeys'
import { useWindowSize } from '@vueuse/core'
import { navLinks, accountLinks } from '@/utils/navigationLinks'

const router = useRouter()

const executeAction = async (linkTitle: string) => {
  if (linkTitle === 'Sign Out') {
    const { logout } = await import('@/utils/supaAuth')
    const isLoggedOut = await logout()

    if (isLoggedOut) router.push('/login')
  }
}

const { menuOpen, toggleMenu } = inject(menuKey) as MenuInjectionsOptions
const windowWidth = useWindowSize().width

watchEffect(() => {
  if (windowWidth.value > 1024) {
    menuOpen.value = true
  } else {
    menuOpen.value = false
  }
})
</script>

<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 transition-[width]"
    :class="{ 'w-52': menuOpen, 'w-14': !menuOpen }"
  >
    <div class="flex h-16 items-center border-b pl-3 shrink-0 justify-start">
      <Button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon @click="toggleMenu" icon="lucide:menu"></iconify-icon>
      </Button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <SidebarLinks :links="navLinks" />
      </div>

      <div class="border-y text-center bg-background py-3">
        <SidebarLinks :links="accountLinks" @actionClicked="executeAction" />
      </div>
    </nav>
  </aside>
</template>
