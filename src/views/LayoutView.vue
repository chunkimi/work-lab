<style lang="scss" scoped>
@import '@/styles/main.scss';

.layout {
  &__wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  &__main {
    position: relative;
    flex: 1;

    &::before,
    &::after {
      content: '';
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: -1;
    }

    &::before {
      width: 480px;
      height: 480px;
      border: 4px solid $info;
      top: 0;
      left: 0;
      opacity: 0.25;
      transform: translate(-50%, -50%);
    }

    &::after {
      width: 240px;
      height: 240px;
      background-color: $primary;
      bottom: 0;
      right: 0;
      opacity: 0.25;
      transform: translate(50%, 50%);
    }
  }
}
</style>

<template>
  <div class="layout__wrap">
    <header class="bg-info">
      <div class="container d-flex justify-content-between align-items-center py-5">
        <RouterLink :to="layoutConfig.indexLink.to" class="text-decoration-none">
          <h2 class="heading-h5 tc-primary ff-particular">{{ labInfo.title }}</h2>
        </RouterLink>
        <nav>
          <RouterLink
            type="button"
            class="btn btn-outline-primary mx-2"
            v-for="linkItem in layoutConfig.navLink"
            :key="linkItem.title"
            :to="linkItem.to"
            >{{ linkItem.title }}</RouterLink
          >
        </nav>
      </div>
    </header>
    <main class="layout__main"><RouterView /></main>
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

const layoutConfig = {
  indexLink: navMenu.find((item) => item.title === 'gate'),
  navLink: navMenu.filter((item) => item.title !== 'gate')
}
</script>
