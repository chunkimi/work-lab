<template>
  <div class="container">
    <div class="resume-section__wrap">
      <h2 class="resume-section__header">{{ awardsConfig.sectionTitle }}</h2>
      <ul class="list-unstyled">
        <li
          v-for="(awardItem, index) in awardsData"
          :key="awardItem.itemId"
          class="d-flex align-items-center"
          :class="index !== 0 ? 'mt-2' : ''"
        >
          <p class="tag d-flex align-items-center bg-quaternary-25 color-dark">
            <span class="material-symbols-outlined"> {{ awardItem.typeIcon }}</span>
            <span class="ms-2" v-if="isMediaMdUp">{{ awardItem.typeText }}</span>
          </p>
          <p class="color-support fs-fixed-7">{{ awardItem.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'
import { resumeNavMenu } from '@/utils/resumeUtils.js'
import awardsInfoData from '@/data/product_awards.json'

const awardsConfig = {
  sectionTitle: resumeNavMenu.find((item) => item.sectionID === 'awards').title,
  projectIcon: [
    { type: 'web', icon: 'computer', text: '前端開發' },
    { type: 'book', icon: 'menu_book', text: '出版編輯' }
  ]
}

const isMediaMdUp = useMediaQuery('(min-width: 769px)')

const awardsData = computed(() => {
  return awardsInfoData.map((award) => {
    const { award_id, prod_type, product_name, awards_info } = award

    const itemDescription = getTypeDescription(prod_type)
    const text = `${product_name}｜${awards_info}`

    return {
      itemId: award_id,
      typeIcon: itemDescription.icon,
      typeText: itemDescription.text,
      text
    }
  })
})

function getTypeDescription(prodType) {
  return awardsConfig.projectIcon.find((item) => item.type === prodType)
}
</script>
