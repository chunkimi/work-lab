<style lang="scss" scoped>
@import '@/styles/main.scss';
.resume {
  &__wrap {
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
      background-color: rgba(red($primary), green($primary), blue($primary), 0.25);
      transform: translate(50%, -50%);
      top: 0;
      right: 0;
    }

    &::after {
      width: 240px;
      height: 240px;
      background-color: $primary;
      bottom: 0;
      left: 0;
      transform: translate(-50%, 50%);
    }
  }
  &__header {
    width: 100%;
    background: $primary;
    position: fixed;
    z-index: 999;
  }
  &__nav {
    &__brand {
      color: $info;
    }
    &__menu {
      background: $primary;
    }

    &__link {
      text-decoration: none;
      color: $info;
      &:hover,
      &:focus,
      &:active {
        color: $primary;
      }
    }
    &__item {
      &:hover,
      &:focus {
        background-color: $info;
        .layout__nav__link {
          color: $primary;
        }
      }
    }
    &__toggle {
      color: $info;
      &:hover {
        color: $secondary;
      }
    }
  }
}
</style>
<template>
  <div class="resume__wrap">
    <header class="resume__header">
      <div class="navbar__wrap" :class="isMediaLgUp ? 'container' : ''">
        <h2 class="resume__nav__brand ff-particular heading-h5 navbar__brand">
          {{ resumeConfig.title }}
        </h2>
        <input type="checkbox" class="navbar__toggle__input" id="layout-navbar-toggle" />
        <label class="resume__nav__toggle navbar__toggle__label" for="layout-navbar-toggle">
          <span class="material-symbols-outlined navbar__toggle__icon">
            {{ resumeConfig.menuIcon }}</span
          >
        </label>
        <nav class="resume__nav__menu navbar__menu">
          <ul class="navbar__list">
            <li
              class="resume__nav__item navbar__item"
              v-for="linkItem in resumeConfig.navLink"
              :key="linkItem.title"
            >
              <a class="resume__nav__link navbar__link" :href="linkItem.path">{{
                linkItem.title
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="container">
      <h1>This is My Resume</h1>
      <div class="block-spacing">
        <!-- Self-introduction -->
        <!-- Web Product Development -->
        <!-- Project Achievements -->
        <!-- Work Experience -->
        <!-- Educational Background -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMediaQuery } from '@vueuse/core'
const isMediaLgUp = useMediaQuery('(min-width: 991px)')
const resumeConfig = {
  title: "Kimi's Resume",
  menuIcon: 'menu',
  navLink: [
    {
      title: 'gate',
      path: '/'
    },
    {
      title: 'about me',
      path: '/'
    },
    {
      title: 'my project',
      path: '/'
    }
  ]
}
</script>
