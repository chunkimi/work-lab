<style lang="scss" scoped>
@import '@/styles/main.scss';

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
  <div class="content__body">
    <div>
      <h5 class="heading-h5 tc-info">{{ contentData.title }}</h5>
      <p class="fz-7 tc-tertiary">{{ contentData.nature }}</p>
    </div>
    <p class="fz-fixed-7">{{ contentData.description }}</p>
    <ul class="list-unstyled d-flex" v-if="contentData.is_front_end_develop">
      <li v-for="developItem in contentData.develop" :key="developItem" class="content__label">
        {{ developItem }}
      </li>
    </ul>
    <div>
      <p class="content__info">
        <span class="material-symbols-outlined">
          {{ contentConfig.workIcon.role }}
        </span>
        <span class="ms-2">{{ contentData.role }}</span>
      </p>
      <p class="content__info" v-if="!contentData.is_front_end_develop">
        <span class="material-symbols-outlined">
          {{ contentConfig.workIcon.task }}
        </span>
        <span class="ms-2">{{ contentData.task }}</span>
      </p>
    </div>
    <ul class="list-unstyled row">
      <li v-for="urlItem in contentData.linkUrl" :key="urlItem" class="col-6">
        <a :href="urlItem.url" target="_blank" class="btn btn-primary content__btn"
          ><i class="bi" :class="turnUrlIcon(urlItem.type)"></i
          ><span class="mx-2">{{ turnUrlText(languageMode, urlItem.type) }}</span></a
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps({
  contentData: {
    type: Object,
    required: true
  },
  languageMode: {
    type: String,
    required: true
  }
})
const contentConfig = {
  workIcon: {
    role: 'badge',
    task: 'build'
  },
  productUrlConfig: [
    { type: 'github', icon: 'bi-github', textEn: 'source code', textZh: '原始碼' },
    { type: 'web', icon: 'bi-window-fullscreen', textEn: 'static website', textZh: '網站' }
  ],
  webProductUrl: [
    { type: 'github', icon: 'bi-github', textEn: 'source code', textZh: '原始碼' },
    { type: 'web', icon: 'bi-window-fullscreen', textEn: 'static website', textZh: '網站' }
  ]
}

function turnUrlIcon(specifyType) {
  const specifyItem = contentConfig.webProductUrl.find((item) => item.type === specifyType)
  return specifyItem.icon
}

function turnUrlText(language, specifyType) {
  const specifyItem = contentConfig.webProductUrl.find((item) => item.type === specifyType)
  const text = language === 'en' ? specifyItem.textEn : specifyItem.textZh
  return text
}
</script>
