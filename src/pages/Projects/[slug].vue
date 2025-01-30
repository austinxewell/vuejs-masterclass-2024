<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = (route.params as { slug?: string }).slug
</script>

<template>
  <div>
    <h1>Project: {{ slug ? slug : 'Project Not Found' }}</h1>
  </div>
</template>

<style scoped></style>
