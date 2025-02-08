<script setup lang="ts">
import AppErrorPage from '@/components/AppError/AppErrorPage.vue'

useErrorStore().setError({ error: 'Page not Found', customCode: 404 })
</script>

<template>
  <AppErrorPage />
</template>
