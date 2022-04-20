<template>
  <PictureWithBreakpoints
    :path="path"
    :alt="alt"
    :breakpoints="breakpoints"
    :ratio="ratio"
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
  },
  data() {
    return {
      breakpoints: [185, 342, 500, 780],
      ratio: 3 / 2,
    }
  },
}
</script>

<style lang="scss" scoped></style>
