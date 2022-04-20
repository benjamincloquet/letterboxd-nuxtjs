<template>
  <div>
    <PictureWithBreakpoints
      :path="path"
      :alt="alt"
      :breakpoints="breakpoints"
      :ratio="ratio"
    />
  </div>
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
  },
  data() {
    return {
      breakpoints: [780, 780, 1280],
      ratio: 439 / 780,
    }
  },
}
</script>

<style lang="scss" scoped>
picture {
  &:before {
    padding-top: calc(439 / 780 * 100%);
  }
}
</style>
