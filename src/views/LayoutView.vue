<template>
  <p>This is Layout</p>
  <div class="container">
    <nav><RouterLink to="/">back to Gate</RouterLink></nav>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>
