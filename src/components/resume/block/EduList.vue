<style lang="scss" scoped>
@import '@/styles/main.scss';

.edu {
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
  <ul class="list-unstyled">
    <li
      v-for="(eduItem, index) in eduDataArr"
      :key="eduItem.id"
      class="edu__item"
      :class="index !== 0 ? 'mt-2' : ''"
    >
      <p class="edu__item__main">
        <span class="material-symbols-outlined">
          {{ eduItem.icon }}
        </span>
        <span class="ms-1">{{ eduItem.main }}</span>
      </p>
      <p class="edu__item__vice">{{ eduItem.exp }}</p>
    </li>
  </ul>
</template>
<script setup>
defineProps({
  eduDataArr: {
    type: Array,
    required: true
  }
})
</script>
