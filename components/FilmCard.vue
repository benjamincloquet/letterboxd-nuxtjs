<template>
  <div>
    <p>{{ details.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default() {
        return { title: 'Movie' }
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
