<style lang="scss" scoped>
.guide {
  &__wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
}
</style>
<template>
  <div class="guide__wrap">
    <p class="heading-h3 color-danger">{{ lostGuideConfig.icon }}</p>
    <h2 class="heading-h5 color-danger">{{ lostGuideConfig.msg }}</h2>
    <RouterLink class="btn btn-primary" :to="lostGuideConfig.entranceLink">{{
      lostGuideConfig.btn
    }}</RouterLink>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { navMenu } from '@/utils/navUtils.js'
const lostGuideConfig = {
  icon: '( ºωº )',
  msg: 'Oops! Seems like we’ve lost our way!',
  btn: 'Return to Index',
  entranceLink: navMenu.find((item) => item.title === 'gate').to
}

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push(lostGuideConfig.entranceLink)
  }, 3000)
})
</script>
