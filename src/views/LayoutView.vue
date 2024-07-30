<template>
  <p>This is Layout</p>
  <nav><RouterLink to="/">back to Gate</RouterLink></nav>
  <RouterView />
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
