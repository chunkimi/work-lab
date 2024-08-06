<style lang="scss" scoped>
@import '@/styles/main.scss';

.layout {
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  &__header {
    position: fixed;
    z-index: 999;
    width: 100%;
    background: $info;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
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
.nav {
  &__wrap {
    display: none;
    @include media-breakpoint(lg) {
      display: block;
    }
  }

  &__icon {
    display: block;
    color: $primary;
    cursor: pointer;
    @include media-breakpoint(lg) {
      display: none;
    }
  }
  &__menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: $info;
    z-index: 998;
    @include media-breakpoint(lg) {
      display: flex;
      flex-direction: row;
      justify-content: right;
      position: static;
      background: none;
      box-shadow: none;
      border: none;
    }
    &.active {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      padding: 3rem;
      gap: 1rem;
    }
  }
}
.scroll-top-btn {
  width: 32px;
  height: 32px;
  font-size: 8px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $dark;
  background-color: $auxiliary;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;
  &:hover,
  &:active {
    background-color: darken($auxiliary, 25%);
    color: $light;
  }
}
</style>
<template>
  <div class="layout__wrap">
    <header class="layout__header">
      <div class="container d-flex justify-content-between align-items-center py-5">
        <RouterLink :to="layoutConfig.indexLink.to" class="text-decoration-none">
          <h2 class="heading-h5 tc-primary ff-particular">{{ labInfo.title }}</h2>
        </RouterLink>
        <nav>
          <div class="nav__icon" @click="toggleMenu">
            <span class="material-symbols-outlined">{{ layoutConfig.menuIcon }}</span>
          </div>
          <div class="nav__menu" :class="{ active: menuActive }">
            <RouterLink
              class="btn btn-outline-primary mx-2"
              v-for="linkItem in layoutConfig.navLink"
              :key="linkItem.title"
              :to="linkItem.to"
              @click="closeMenu"
              >{{ linkItem.title }}</RouterLink
            >
          </div>
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
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { useMediaQuery } from '@vueuse/core'
import { labInfo } from '@/data/lab_info.js'
import { navMenu } from '@/utils/navUtils.js'

const isMediaLgDown = useMediaQuery('(max-width: 991px)')

const layoutConfig = {
  indexLink: navMenu.find((item) => item.title === 'gate'),
  navLink: navMenu.filter((item) => item.title !== 'gate'),
  menuIcon: 'menu',
  pageTopIcon: 'arrow_upward'
}

const menuActive = ref(false)

function toggleMenu() {
  menuActive.value = !menuActive.value
}

function closeMenu() {
  if (isMediaLgDown) {
    menuActive.value = false
  }
}
</script>
