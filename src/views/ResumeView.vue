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
    }

    &__item {
      cursor: pointer;
      &:hover,
      &:focus,
      &:active {
        background-color: $info;
        .resume__nav__link {
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
  &__section {
    padding-top: $header-nav-height;
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
        <input
          ref="resumeNavToggle"
          type="checkbox"
          class="navbar__toggle__input"
          id="layout-navbar-toggle"
        />
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
              <p class="resume__nav__link navbar__link" @click="handleNavClick(linkItem.sectionID)">
                {{ linkItem.title }}
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="resume__main">
      <div class="container">
        <h1>This is My Resume</h1>
      </div>
      <div class="block-spacing">
        <!-- Self-introduction -->
        <div class="resume__section bg-secondary-50" id="intro">
          <div class="container">
            <h3 class="fs-3 color-warning">Self-introduction</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
        </div>
        <div class="resume__section" id="web-prod-dev">
          <WebProdDev />
        </div>
        <div class="resume__section" id="awards">
          <ResumeAwards />
        </div>
        <!--  Work Project -->
        <div class="resume__section bg-secondary-50" id="work-proj">
          <div class="container">
            <h3 class="fs-3 color-warning">Work Project</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
        </div>
        <!-- Work Experience -->
        <div class="resume__section bg-secondary-50" id="work-exp">
          <div class="container">
            <h3 class="fs-3 color-warning">Work Experience</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
        </div>
        <!-- Educational Background -->
        <div class="resume__section bg-secondary-50" id="edu">
          <div class="container">
            <h3 class="fs-3 color-warning">Educational Background</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { resumeNavMenu } from '@/utils/resumeUtils.js'
import WebProdDev from '@/components/resume/WebProdDev.vue'
import ResumeAwards from '@/components/resume/ResumeAwards.vue'

const isMediaLgUp = useMediaQuery('(min-width: 991px)')

const resumeConfig = {
  title: 'My Resume',
  menuIcon: 'menu',
  navLink: resumeNavMenu
}

const resumeNavToggle = ref(null)

function handleNavClick(sectionID) {
  const getSection = `#${sectionID}`
  const section = document.querySelector(getSection)

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    closeNavCollapse()
  }
}

function closeNavCollapse() {
  if (resumeNavToggle.value && !isMediaLgUp.value) {
    resumeNavToggle.value.checked = false
  }
}
</script>
