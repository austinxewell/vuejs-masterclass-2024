<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  console.log('Projects: ', data)
})()
</script>

<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/Projects/[id]', params: { id: 1 } }">Go To Projects Here</RouterLink>
  </div>
</template>

<style scoped></style>
