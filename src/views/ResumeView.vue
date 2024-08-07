<style lang="scss" scoped>
@import '@/styles/main.scss';

.resume {
  &__wrap {
    position: relative;
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
  &__main {
    background-image: url('@/assets/bg/wave-top.svg'), url('@/assets/bg/wave-bottom.svg');
    background-position:
      50% 5%,
      bottom;
    background-repeat: no-repeat, no-repeat;
    background-size: contain, contain;
    background-attachment: fixed, fixed;
    padding-top: 10rem;
    padding-bottom: 10rem;
    @include media-breakpoint(md) {
      background-position: top, bottom;
    }
    @include media-breakpoint(xl) {
      background-position:
        50% -10%,
        50% 110%;
    }
  }
}

.text-section {
  height: 320px;
  background: $info;
  opacity: 0.75;
  color: $light;
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
    <main class="resume__main">
      <div class="container">
        <h1>This is My Resume</h1>
        <div class="block-spacing">
          <div class="text-section">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <div class="text-section">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <div class="text-section">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <div class="text-section">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <!-- Self-introduction -->
          <!-- Web Product Development -->
          <!-- Project Achievements -->
          <!-- Work Experience -->
          <!-- Educational Background -->
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { useMediaQuery } from '@vueuse/core'
const isMediaLgUp = useMediaQuery('(min-width: 991px)')
const resumeConfig = {
  title: 'My Resume',
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
