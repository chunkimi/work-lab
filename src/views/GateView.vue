<style lang="scss" scoped></style>
<template>
  <h1>This is Gate Page</h1>
  <div class="container">
    <nav class="row">
      <div class="col-12 col-md-6 col-lg-3">
        <div class="bg-primary">
          <RouterLink to="/profile">Profile</RouterLink>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <div class="bg-secondary">
          <RouterLink to="/resume">Resume</RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>
