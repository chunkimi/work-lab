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
}

.test-section {
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
              <p class="resume__nav__link navbar__link" @click="handleNavClick(linkItem.path)">
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
        <div class="block-spacing">
          <!-- Self-introduction -->
          <div class="test-section" id="intro">
            <h3 class="fs-3 tc-warning">Self-introduction</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <!-- Web Product Development -->
          <div class="test-section" id="web-prod-dev">
            <h3 class="fs-3 tc-warning">Web Product Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <!-- Awards -->
          <div class="test-section" id="awards">
            <h3 class="fs-3 tc-warning">Awards</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <!--  Work Project -->
          <div class="test-section" id="work-proj">
            <h3 class="fs-3 tc-warning">Work Project</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <!-- Work Experience -->
          <div class="test-section" id="work-exp">
            <h3 class="fs-3 tc-warning">Work Experience</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, maxime molestiae
              ut quisquam corporis debitis, aperiam ad magnam nobis culpa provident quod ullam
              commodi harum maiores repudiandae cumque voluptatem sint.
            </p>
          </div>
          <!-- Educational Background -->
          <div class="test-section" id="edu">
            <h3 class="fs-3 tc-warning">Educational Background</h3>
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
const isMediaLgUp = useMediaQuery('(min-width: 991px)')
const resumeConfig = {
  title: 'My Resume',
  menuIcon: 'menu',
  navLink: [
    {
      title: '關於',
      path: '#intro'
    },
    {
      title: '開發經驗',
      path: '#web-prod-dev'
    },
    {
      title: '獲獎',
      path: '#awards'
    },
    {
      title: '專案成果',
      path: '#work-proj'
    },
    {
      title: '工作經歷',
      path: '#work-exp'
    },
    {
      title: '教育背景',
      path: '#edu'
    }
  ]
}

const resumeNavToggle = ref(null)

function handleNavClick(path) {
  const section = document.querySelector(path)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'center' })
    closeNavCollapse()
  }
}

function closeNavCollapse() {
  if (resumeNavToggle.value && !isMediaLgUp.value) {
    resumeNavToggle.value.checked = false
  }
}
</script>
