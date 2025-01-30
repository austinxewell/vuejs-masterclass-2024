<script setup lang="ts">
const route = useRoute()
const slug = (route.params as { slug?: string }).slug
</script>

<template>
  <div>
    <h1>Project: {{ slug ? slug : 'Project Not Found' }}</h1>
  </div>
</template>

<style scoped></style>
