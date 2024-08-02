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
      <HorizCard
        :language-mode="projectConfig.infoLanguageMode"
        :products-data="productDevelopData"
      />
    </div>
  </div>
</template>
<script setup>
import HorizCard from '@/components/web_product/HorizCard.vue'
import productDevelopData from '@/data/web_product_develop.json'

const projectConfig = {
  pageTitle: 'My Project',
  infoLanguageMode: 'en'
}
</script>
