/* eslint-disable vue/no-v-html */
<template>
  <div v-if="name" v-html="require(`@/assets/svg/${name}.svg?raw`)" />
</template>

<script>
export default {
  props: {
    name: { type: String, default: null },
  },
}
</script>

<style lang="scss" scoped></style>
