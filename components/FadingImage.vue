<template>
  <img v-if="src" :src="src" :alt="alt" loading="lazy" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default() {
        return null
      },
    },
    alt: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

img {
  animation: 1s cubic-bezier(0.4, 0, 0.2, 1) fadeIn;
}
</style>
