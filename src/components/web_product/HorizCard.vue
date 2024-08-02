<style lang="scss" scoped>
@import '@/styles/main.scss';

.horiz-card {
  &__img {
    width: 100%;
    height: 100%;
    min-height: 240px;
    max-height: 600px;
    object-fit: cover;
    object-position: center center;
    border-radius: 10px 10px 0 0;
    @include media-breakpoint(lg) {
      border-radius: 10px 0 0 10px;
    }
  }

  &__body {
    padding: 1.25rem 0.75rem;
    background-color: $light;
    border-radius: 10px;
    @include media-breakpoint(lg) {
      padding: 1.25rem 1.5rem;
    }
  }
  &__item {
    display: grid;
    flex-direction: column;
    margin-bottom: 2rem;
    border: 1px solid $auxiliary;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.175);
    }
    @include media-breakpoint(lg) {
      display: grid;
      grid-template-columns: 2fr 3fr;
    }
  }
}
</style>

<template>
  <ul class="list-unstyled row">
    <li class="col-12" v-for="productItem in productInfoData" :key="productItem.id">
      <div class="horiz-card__item">
        <img
          :src="getImage(turnProductImgPath(productItem.img))"
          alt="product-img"
          class="horiz-card__img"
        />
        <div class="horiz-card__body">
          <!-- content -->
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
  return props.productsData.map((product) => {
    const { info_zh, info_en, repo_url, web_url, develop_label, ...others } = product
    const linkUrl = []
    if (web_url !== '') {
      const web = { type: 'web', url: web_url }
      linkUrl.push(web)
    }

    if (repo_url !== '') {
      const repo = { type: 'github', url: repo_url }
      linkUrl.push(repo)
    }
    if (props.languageMode === 'en') {
      return {
        title: info_en.website,
        description: info_en.description,
        nature: info_en.nature,
        role: info_en.role,
        task: info_en.task,
        develop: develop_label,
        linkUrl,
        ...others
      }
    } else if (props.languageMode === 'zh') {
      return {
        title: info_en.website,
        description: info_zh.description,
        nature: info_zh.nature,
        role: info_zh.role,
        task: info_zh.task,
        develop: develop_label,
        linkUrl,
        ...others
      }
    }
  })
})

function turnProductImgPath(img) {
  return `assets/images/web_product/${img}__preview.jpg`
}
</script>
