<style lang="scss" scoped>
@import '@/styles/main.scss';
.gate {
  &__wrap {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    &::before,
    &::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      background-color: $secondary;
      pointer-events: none;
      z-index: 1;
    }
    &::before {
      width: 600px;
      height: 600px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.1;
      animation: lgDote 0.9s ease-out forwards;
    }

    &::after {
      width: 60px;
      height: 60px;
      bottom: 10%;
      right: 20%;
      transform: translate(50%, 50%);
      opacity: 0.3;
      animation: smDote 0.9s ease-out forwards;
    }

    @keyframes lgDote {
      0% {
        transform: translate(-50%, -50%) scale(1.5);
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
      }
    }
    @keyframes smDote {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.3;
      }
    }
  }

  &__container {
    width: 75%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1,
    p {
      animation: textFadeInUp 0.5s ease-out forwards;
    }

    h1 {
      animation-delay: 0.5s;
    }

    p {
      animation-delay: 1s;
    }
  }

  @keyframes textFadeInUp {
    0% {
      opacity: 0;
      transform: translateY(16px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
<template>
  <div class="gate__wrap bg-info">
    <div class="gate__container">
      <h1 class="color-primary ff-particular">
        <span class="heading-h1">{{ labInfo.holders }}</span>
        <br />
        <span class="heading-h2">{{ labInfo.platform }}</span>
      </h1>
      <p class="fs-fixed-7 color-auxiliary my-5">{{ labInfo.intro }}</p>
      <div class="d-flex justify-content-center">
        <RouterLink
          type="button"
          class="btn btn-outline-primary mx-2"
          v-for="linkItem in gateConfig.navLink"
          :key="linkItem.title"
          :to="linkItem.to"
          >{{ linkItem.title }}</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { navMenu } from '@/utils/navUtils'
import { labInfo } from '@/data/lab_info.js'
const gateConfig = {
  navLink: navMenu.filter((item) => item.title !== 'gate')
}
</script>
