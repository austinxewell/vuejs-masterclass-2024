<script setup lang="ts"></script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/Projects/[id]', params: { id: 1 } }">Go To Projects Here</RouterLink>
  </div>
</template>

<style scoped></style>
