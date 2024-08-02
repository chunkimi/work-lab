<style lang="scss" scoped>
@import '@/styles/main.scss';

.project {
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
    @include media-breakpoint(lg) {
      padding: 0.75rem 1.25rem;
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

.content {
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  &__label {
    margin: 0 0.5rem;
    padding: 0.5rem 0.75rem;
    font-size: $font-sizes-8;
    border-radius: 32px;
    color: $dark;
    background-color: $secondary;
  }
  &__btn {
    width: 100%;
  }
  &__info {
    font-size: $font-sizes-7;
    color: $info;
    display: flex;
    align-items: flex-start;
  }
}
</style>

<template>
  <div class="container">
    <div class="block-spacing">
      <h1 class="heading-h3 text-align-end tc-warning">{{ projectConfig.pageTitle }}</h1>
      <ul class="list-unstyled row">
        <li class="col-12" v-for="productItem in productInfoData" :key="productItem.id">
          <div class="project__item">
            <img
              :src="getImage(turnProductImgPath(productItem.img))"
              alt="product-img"
              class="project__img"
            />
            <div class="project__body">
              <div class="content__body">
                <div>
                  <h5 class="heading-h5 tc-info">{{ productItem.title }}</h5>
                  <p class="fz-7 tc-tertiary">{{ productItem.nature }}</p>
                </div>
                <p class="fz-fixed-7">{{ productItem.description }}</p>
                <ul class="list-unstyled d-flex">
                  <li
                    v-for="developItem in productItem.develop"
                    :key="developItem"
                    class="content__label"
                  >
                    {{ developItem }}
                  </li>
                </ul>
                <div>
                  <p class="content__info">
                    <span class="material-symbols-outlined">
                      {{ contentConfig.workIcon.role }}
                    </span>
                    <span class="ms-2">{{ productItem.role }}</span>
                  </p>
                  <p class="content__info" v-if="!productItem.is_front_end_develop">
                    <span class="material-symbols-outlined">
                      {{ contentConfig.workIcon.task }}
                    </span>
                    <span class="ms-2">{{ productItem.task }}</span>
                  </p>
                </div>
                <ul class="list-unstyled row">
                  <li v-for="urlItem in productItem.linkUrl" :key="urlItem" class="col-6">
                    <a :href="urlItem.url" target="_blank" class="btn btn-primary content__btn"
                      ><i class="bi" :class="turnUrlIcon(urlItem.type)"></i
                      ><span class="mx-2">{{ turnUrlText(languageMode, urlItem.type) }}</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { getImage } from '@/utils/imgUtils.js'
import productDevelopData from '@/data/web_product_develop.json'

const projectConfig = {
  pageTitle: 'My Project'
}

const contentConfig = {
  workIcon: {
    role: 'badge',
    task: 'build'
  },
  productUrlConfig: [
    { type: 'github', icon: 'bi-github', textEn: 'source code', textZh: '原始碼' },
    { type: 'web', icon: 'bi-window-fullscreen', textEn: 'static website', textZh: '網站' }
  ]
}

const webProductUrlConfig = [
  { type: 'github', icon: 'bi-github', textEn: 'source code', textZh: '原始碼' },
  { type: 'web', icon: 'bi-window-fullscreen', textEn: 'static website', textZh: '網站' }
]

const languageMode = 'en'

const productInfoData = computed(() => {
  return productDevelopData.map((product) => {
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
    if (languageMode === 'en') {
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
    } else if (languageMode === 'zh') {
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

function turnUrlIcon(specifyType) {
  const specifyItem = webProductUrlConfig.find((item) => item.type === specifyType)
  return specifyItem.icon
}

function turnUrlText(language, specifyType) {
  const specifyItem = webProductUrlConfig.find((item) => item.type === specifyType)
  const text = language === 'en' ? specifyItem.textEn : specifyItem.textZh
  return text
}
</script>
