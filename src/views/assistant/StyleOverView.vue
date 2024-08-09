<template>
  <div class="container">
    <h1 class="heading-h2">Style Over View</h1>
    <div class="py-10">
      <p class="fs-5 mb-5">Heading</p>
      <p
        v-for="headingIndex in headingLevels"
        :key="headingIndex"
        :class="`heading-h${headingIndex}`"
      >
        {{ `h${headingIndex}: heading title` }}
      </p>
    </div>
    <div class="py-10">
      <p class="fs-5 mb-5">Font Size RWD</p>
      <p v-for="fzIndex in fontSizeLevels" :key="fzIndex" :class="`fs-${fzIndex}`">
        {{ `fs-${fzIndex}: text font-size rwd` }}
      </p>
    </div>
    <div class="py-10">
      <p class="fs-5 mb-5">Font Size no RWD</p>
      <p v-for="fzIndex in fontSizeLevels" :key="fzIndex" :class="`fs-fixed-${fzIndex}`">
        {{ `fs-fixed-${fzIndex}: text font-size fixed` }}
      </p>
    </div>
    <div class="py-10">
      <p class="fs-5 mb-5">Button-outline</p>
      <button
        v-for="type in themeColors"
        :key="'outline-' + type.key"
        type="button"
        class="btn mx-1"
        :class="`btn-outline-${type.key}`"
      >
        {{ type.text }}
      </button>
    </div>
    <div class="py-10">
      <p class="fs-5 mb-5">Button-normal</p>
      <button
        v-for="type in themeColors"
        :key="type.key"
        type="button"
        class="btn mx-1"
        :class="`btn-${type.key}`"
      >
        {{ type.text }}
      </button>
    </div>
    <div class="py-10">
      <p class="fs-5">Theme Color</p>
      <div v-for="color in themeColors" :key="color.key" class="theme-color-section">
        <h4 class="theme-color-title">{{ color.text }}</h4>
        <div class="mb-5">
          <div :class="`bg-${color.key}`" class="color-swatch color-light">
            <span>100%</span>
          </div>
          <div
            v-for="opacity in opacityLevels"
            :key="opacity"
            :class="`bg-${color.key}-${opacity}`"
            class="color-swatch color-light"
          >
            <span>{{ opacity }}%</span>
          </div>
        </div>
        <div>
          <div :class="`bg-${color.key}`" class="color-swatch color-dark">
            <span>100%</span>
          </div>
          <div
            v-for="opacity in opacityLevels"
            :key="opacity"
            :class="`bg-${color.key}-${opacity}`"
            class="color-swatch color-dark"
          >
            <span>{{ opacity }}%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10">
      <p class="fs-5">Link</p>
      <a
        href="#"
        v-for="color in themeColors"
        :key="color.key"
        class="mx-2"
        :class="`link-${color.key}`"
        >{{ color.text }}</a
      >
    </div>
  </div>
</template>

<script setup>
const themeColors = [
  { key: 'primary', text: 'Primary' },
  { key: 'secondary', text: 'Secondary' },
  { key: 'tertiary', text: 'Tertiary' },
  { key: 'quaternary', text: 'Quaternary' },
  { key: 'warning', text: 'Warning' },
  { key: 'info', text: 'Info' },
  { key: 'danger', text: 'Danger' },
  { key: 'success', text: 'Success' },
  { key: 'dark', text: 'Dark' },
  { key: 'light', text: 'Light' },
  { key: 'auxiliary', text: 'Auxiliary' },
  { key: 'support', text: 'Support' }
]

const opacityLevels = [90, 75, 50, 25]
const headingLevels = 6
const fontSizeLevels = 9
</script>

<style scoped>
.theme-color-section {
  margin-bottom: 20px;
}

.theme-color-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.color-swatch {
  display: inline-block;
  width: 100px;
  height: 50px;
  margin-right: 10px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  border-radius: 5px;
}
</style>
