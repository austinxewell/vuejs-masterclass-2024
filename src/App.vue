<script setup lang="ts">
import TopNavbar from './components/Layout/TopNavbar.vue'
import AppSidebar from './components/Layout/AppSidebar.vue'
</script>

<template>
  <AppSidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
