<template>
  <picture
    v-if="breakpoints.length > 0"
    class="relative block"
    :style="`padding-top: calc(${ratio} * 100%)`"
  >
    <source
      v-for="index in screenBreakpoints.length"
      :key="screenBreakpoints[index - 1]"
      :srcset="`https://image.tmdb.org/t/p/w${
        breakpoints[index - 1] || breakpoints.slice(-1)
      }${path}`"
      :media="`(max-width: ${screenBreakpoints[index - 1]}px)`"
    />
    <FadingImage
      v-if="path"
      :src="`https://image.tmdb.org/t/p/w${breakpoints.slice(-1)}${path}`"
      :alt="alt"
      class="absolute top-0 left-0 w-full h-full object-cover object-left-top"
    />
  </picture>
  <img
    v-else-if="path"
    :src="`https://image.tmdb.org/t/p/original${path}`"
    loading="lazy"
    :alt="alt"
  />
</template>

<script>
export default {
  props: {
    path: {
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
    breakpoints: {
      type: Array,
      default() {
        return []
      },
    },
    ratio: {
      type: Number,
      default() {
        return 1
      },
    },
  },
  data() {
    return {
      screenBreakpoints: [640, 768, 1024, 1280],
    }
  },
}
</script>

<style lang="scss" scoped></style>
