<script setup lang="ts">
import router from '@/router'
import { navLinks, accountLinks } from '@/utils/navigationLinks'

type Link = {
  title: string
  to?: string
  icon: string
}

const allLinks: Link[] = [...navLinks, ...accountLinks]

const logout = async (linkTitle: string) => {
  if (linkTitle === 'Sign Out') {
    const { logout } = await import('@/utils/supaAuth')
    const isLoggedOut = await logout()

    if (isLoggedOut) router.push('/login')
  }
}
</script>

<template>
  <div class="w-full h-20 bg-slate-900 fixed bottom-0 z-40 flex justify-evenly items-center">
    <div v-for="link in allLinks" :key="link.title">
      <RouterLink
        v-if="link.to"
        exactActiveClass="text-primary bg-muted"
        :to="link.to"
        class="nav-link"
      >
        <iconify-icon :icon="link.icon"></iconify-icon>
      </RouterLink>
      <div v-else class="nav-link cursor-pointer" @click="logout(link.title)">
        <iconify-icon :icon="link.icon"></iconify-icon>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-link {
  @apply px-4 py-2 text-2xl transition-colors rounded-lg hover:text-primary text-muted-foreground;
}
</style>
