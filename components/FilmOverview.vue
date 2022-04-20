<template>
  <div>
    <h2 class="subtitle mb-4">
      {{ tagline }}
    </h2>
    <p class="tracking-wide">{{ overview }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tagline: {
      type: String,
      default: null,
    },
    overview: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
