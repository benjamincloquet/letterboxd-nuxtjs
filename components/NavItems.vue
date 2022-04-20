<template>
  <ul>
    <NavItem><NuxtLink to="/">Home</NuxtLink></NavItem>
    <NavItem><NuxtLink to="/watchlist">Watchlist</NuxtLink></NavItem>
    <NavItem class="flex items-center">
      <button class="relative group" @click="toggleDarkMode">
        <SVGLogo
          :class="`stroke-stone-700 dark:stroke-stone-100 group-hover:scale-105 ${
            isDarkMode ? '' : 'opacity-0'
          }`"
          name="sun"
        />
        <SVGLogo
          :class="`absolute top-0 left-0 stroke-stone-700 dark:stroke-stone-100 group-hover:scale-105  ${
            isDarkMode ? 'opacity-0' : ''
          }`"
          name="moon"
        />
      </button>
    </NavItem>
    <slot />
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    isDarkMode() {
      return this.$store.state.ui.isDarkMode
    },
  },
  methods: {
    ...mapMutations({
      toggleDarkMode: 'ui/toggleDarkMode',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
