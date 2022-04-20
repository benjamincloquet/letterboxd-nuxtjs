<template>
  <button
    class="px-3 py-4 border border-stone-300 dark:border-stone-500 rounded flex gap-2 items-center"
    @click="onClick"
  >
    <SVGLogo class="stroke-stone-700 dark:stroke-stone-100" name="pen" />
    <span class="font-sans font-extralight tracking-wide">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped></style>
