<template>
  <h1>This is Gate Page</h1>
  <nav>
    <RouterLink to="/profile">Profile</RouterLink>
    <RouterLink to="/resume">Resume</RouterLink>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
