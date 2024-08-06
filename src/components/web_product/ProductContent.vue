<style lang="scss" scoped>
@import '@/styles/main.scss';

.content {
  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
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
      <h5 class="heading-h5 tc-info">{{ contentData.info.website }}</h5>
      <p class="fz-7 tc-tertiary">{{ contentData.info.nature }}</p>
    </div>
    <p class="fz-fixed-7">{{ contentData.info.description }}</p>
    <ul class="list-unstyled d-flex flex-wrap" v-if="contentData.isShowDevelopLabel">
      <li
        v-for="developItem in contentData.develop_label"
        :key="developItem"
        class="tag bg-secondary tc-dark"
      >
        {{ developItem }}
      </li>
    </ul>
    <div>
      <p class="content__info">
        <span class="material-symbols-outlined">
          {{ contentConfig.workIcon.role }}
        </span>
        <span class="ms-2">{{ contentData.info.role }}</span>
      </p>
      <p class="content__info" v-if="contentData.isShowTask">
        <span class="material-symbols-outlined">
          {{ contentConfig.workIcon.task }}
        </span>
        <span class="ms-2">{{ contentData.info.task }}</span>
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
