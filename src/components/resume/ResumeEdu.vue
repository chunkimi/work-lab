<style lang="scss" scoped>
@import '@/styles/main.scss';

.edu {
  &__title {
    margin-bottom: 0.5rem;
    color: $auxiliary;
    font-size: $font-sizes-5;
    font-weight: map-get($font-weight, normal);
  }
  &__item {
    display: flex;
    align-items: start;
    &__main {
      display: flex;
      align-items: start;
      color: $warning;
      white-space: nowrap;
    }
    &__vice {
      color: $auxiliary;
      white-space: normal;
      border-left: 2px solid$auxiliary;
      margin-left: 0.5rem;
      padding-left: 0.5rem;
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="resume-section__wrap">
      <h2 class="resume-section__header">{{ eduConfig.sectionTitle }}</h2>
      <div class="row">
        <div class="col-12 col-lg-6" :class="isMediaLgDown ? 'mb-6' : ''">
          <h3 class="edu__title">{{ eduConfig.academic.title }}</h3>
          <EduList :edu-data-arr="academicData" />
        </div>
        <div class="col-12 col-lg-6">
          <h3 class="edu__title">{{ eduConfig.training.title }}</h3>
          <EduList :edu-data-arr="trainingData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { resumeNavMenu } from '@/utils/resumeUtils.js'
import qualData from '@/data/qualification.json'
import EduList from '@/components/resume/block/EduList.vue'

const eduConfig = {
  sectionTitle: resumeNavMenu.find((item) => item.sectionID === 'edu').title,
  academic: {
    title: '學位',
    icon: 'school'
  },
  training: {
    title: '前端進修',
    icon: 'keyboard'
  }
}

const isMediaLgDown = useMediaQuery('(max-width: 991px)')

const academicData = computed(() => {
  return qualData.academic_degree
    .map((qualItem) => {
      const { qual_type, academic_id, degree, institution, department } = qualItem

      const exp = `${institution}${department}`
      return {
        id: `${qual_type}-${academic_id}`,
        icon: eduConfig.academic.icon,
        main: degree,
        exp
      }
    })
    .sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }))
})

const trainingData = computed(() => {
  return qualData.frontend_training.map((qualItem) => {
    const { qual_type, training_id, institution, course } = qualItem

    const exp = course
      .map((item, index) => {
        return index !== course.length - 1 ? `${item}、` : item
      })
      .join('')

    return {
      id: `${qual_type}-${training_id}`,
      icon: eduConfig.training.icon,
      main: institution,
      exp
    }
  })
})
</script>
