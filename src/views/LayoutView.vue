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
    width: 100%;
    background: $info;
    position: fixed;
    z-index: 999;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.1);
  }
  &__main {
    position: relative;
    flex: 1;
    padding: 10rem 0rem;
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

  &__nav {
    &__brand {
      color: $primary;
      &:hover,
      &:focus,
      &:active {
        color: $warning;
      }
    }
    &__menu {
      background: $info;
    }

    &__link {
      text-decoration: none;
      color: $primary;
      &:hover,
      &:focus,
      &:active {
        color: $info;
      }
    }
    &__item {
      &:hover,
      &:focus {
        background-color: $primary;
        .layout__nav__link {
          color: $info;
        }
      }
    }
    &__toggle {
      color: $primary;
      &:hover {
        color: $warning;
      }
    }
  }
}
</style>
<template>
  <div class="layout__wrap">
    <header class="layout__header">
      <div class="navbar__wrap" :class="isMediaLgUp ? 'container' : ''">
        <RouterLink :to="layoutConfig.indexLink.to" class="text-decoration-none layout__nav__brand">
          <h2 class="ff-particular heading-h5 navbar__brand">{{ labInfo.title }}</h2>
        </RouterLink>
        <input
          type="checkbox"
          ref="layoutNavToggle"
          class="navbar__toggle__input"
          id="layout-navbar-toggle"
        />
        <label class="layout__nav__toggle navbar__toggle__label" for="layout-navbar-toggle">
          <span class="material-symbols-outlined navbar__toggle__icon">
            {{ layoutConfig.menuIcon }}</span
          >
        </label>
        <nav class="layout__nav__menu navbar__menu">
          <ul class="navbar__list">
            <li
              class="layout__nav__item navbar__item"
              v-for="linkItem in layoutConfig.navLink"
              :key="linkItem.title"
            >
              <RouterLink
                class="layout__nav__link navbar__link"
                :to="linkItem.to"
                @click="handleNavClick"
                >{{ linkItem.title }}</RouterLink
              >
            </li>
          </ul>
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

const isMediaLgUp = useMediaQuery('(min-width: 991px)')

const layoutConfig = {
  indexLink: navMenu.find((item) => item.title === 'gate'),
  navLink: navMenu.filter((item) => item.title !== 'gate'),
  menuIcon: 'menu'
}

const layoutNavToggle = ref(null)
function handleNavClick() {
  if (layoutNavToggle.value && !isMediaLgUp.value) {
    layoutNavToggle.value.checked = false
  }
}
</script>
