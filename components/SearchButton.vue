<template>
  <button aria-label="Navigation" @click="toggleMobileSearchBar">
    <SVGLogo class="stroke-stone-700 dark:stroke-stone-100" name="search" />
  </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggleMobileSearchBar: 'ui/toggleMobileSearchBar',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
