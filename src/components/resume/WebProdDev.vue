<template>
  <div class="container">
    <div class="resume-section__wrap">
      <h2 class="resume-section__header">{{ webProdDevConfig.title }}</h2>
      <ProductCard
        :languageMode="webProdDevConfig.languageMode"
        :products-data="productDevelopData"
      />
    </div>
  </div>
</template>
<script setup>
import { resumeNavMenu } from '@/utils/resumeUtils.js'
import ProductCard from '@/components/web_product/ProductCard.vue'
import productDevelopData from '@/data/web_product_develop.json'

const webProdDevConfig = {
  title: resumeNavMenu.find((item) => item.sectionID === '#web-prod-dev').title,
  languageMode: 'zh'
}
</script>
