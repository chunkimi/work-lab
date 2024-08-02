<style lang="scss" scoped>
.layout {
  &__wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
<template>
  <div class="layout__wrap">
    <header class="bg-info">
      <div class="container d-flex justify-content-between align-items-center py-5">
        <h2 class="heading-h5 tc-primary ff-particular">{{ labInfo.title }}</h2>
        <nav>
          <RouterLink
            type="button"
            class="btn btn-outline-primary mx-2"
            v-for="linkItem in navMenu"
            :key="linkItem.title"
            :to="linkItem.to"
            >{{ linkItem.title }}</RouterLink
          >
        </nav>
      </div>
    </header>
    <main><RouterView /></main>
    <footer>
      <div class="container py-5">
        <p class="fs-fixed-7 tc-info text-align-center">{{ labInfo.copyright }}</p>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { labInfo } from '@/data/lab_info.js'
import { navMenu } from '@/utils/navUtils.js'
</script>
