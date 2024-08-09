<template>
  <div class="container">
    <div class="resume-section__wrap">
      <h2 class="resume-section__header">{{ eduConfig.sectionTitle }}</h2>
    </div>
  </div>
</template>
<script setup>
import { resumeNavMenu } from '@/utils/resumeUtils.js'

const eduConfig = {
  sectionTitle: resumeNavMenu.find((item) => item.sectionID === 'edu').title
}
</script>
