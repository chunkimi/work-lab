<style lang="scss">
@import '@/styles/main.scss';
.prod-card {
  &__item {
    display: flex;
    display: grid;
    flex-direction: column;
    border: 1px solid $auxiliary;
    border-radius: 12px;
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.175);
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    min-height: 240px;
    max-height: 600px;
    object-fit: cover;
    object-position: center center;
    border-radius: 12px 12px 0 0;
  }
  &__body {
    padding: 1.25rem 0.75rem;
    background-color: $light;
    border-radius: 0px 0px 12px 12px;
  }
}
</style>
<template>
  <ul class="list-unstyled row">
    <li
      class="col-12 col-lg-6 mb-6"
      v-for="productItem in productInfoData"
      :key="productItem.cardId"
    >
      <div class="prod-card__item">
        <img
          :src="getImage(turnProductImgPath(productItem.img))"
          alt="product-img"
          class="prod-card__img"
        />
        <div class="prod-card__body">
          <ProductContent :content-data="productItem" :language-mode="languageMode" />
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { computed } from 'vue'
import { getImage } from '@/utils/imgUtils.js'
import ProductContent from '@/components/web_product/ProductContent.vue'

const props = defineProps({
  languageMode: {
    type: String,
    required: true
  },
  productsData: {
    type: Array,
    required: true
  }
})

const productInfoData = computed(() => {
  console.log('props.languageMode', props.languageMode)
  return props.productsData
    .map((product) => {
      const { pro_id, info_zh, info_en, repo_url, web_url, ...others } = product
      const linkUrl = []
      if (web_url !== '') {
        const web = { type: 'web', url: web_url }
        linkUrl.push(web)
      }

      if (repo_url !== '') {
        const repo = { type: 'github', url: repo_url }
        linkUrl.push(repo)
      }

      const info = props.languageMode === 'zh' ? info_zh : info_en
      const isShowDevelopLabel = pro_id !== '001' ? true : false
      const isShowTask = true

      return {
        cardId: pro_id,
        info,
        linkUrl,
        isShowTask,
        isShowDevelopLabel,
        ...others
      }
    })
    .sort((a, b) => b.cardId.localeCompare(a.cardId))
})

function turnProductImgPath(img) {
  return `assets/images/web_product/${img}__preview.jpg`
}
</script>
