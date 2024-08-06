<style lang="scss" scoped>
@import '@/styles/main.scss';
.profile {
  &__list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid $auxiliary;
  }
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
}
</style>
<template>
  <div class="container">
    <h1 class="fs-fixed-7 tc-info mb-5">{{ profileConfig.title }}</h1>
    <h2 class="heading-h2 mb-5 tc-warning ff-particular">
      {{ profileData.name }}
    </h2>
    <div class="fs-fixed-6 mb-5 fw-light" v-html="formattedIntro"></div>
    <ul class="list-unstyled profile__list">
      <li v-for="skillItem in allSkills" :key="skillItem" class="tag bg-tertiary-50 tc-dark">
        {{ skillItem }}
      </li>
    </ul>
    <ul class="list-unstyled">
      <li v-for="snsItem in profileData.sns" :key="snsItem.type">
        <a :href="snsItem.url" class="text-decoration-none tc-info fs-fixed-5">
          <i class="bi bi-github"></i>
        </a>
      </li>
    </ul>
    <div class="p-4 d-flex flex-row-reverse">
      <RouterLink :to="profileConfig.projectLink.to" class="fs-fixed-6 link-info profile__link">
        <span class="me-1">{{ profileConfig.projectLink.text }}</span>
        <span class="material-symbols-outlined"> directions_run </span>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import profileData from '@/data/profile.json'

const profileConfig = {
  title: 'About me',
  projectLink: {
    text: 'view my project',
    to: { name: 'Project' }
  }
}

const formattedIntro = computed(() => {
  return profileData.simple_intro_en.map((paragraph) => `<p class="mb-4">${paragraph}</p>`).join('')
})

const allSkills = computed(() => {
  return [...profileData.front_end_skills, ...profileData.other_skills]
})
</script>
