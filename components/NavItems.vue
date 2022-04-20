<template>
  <ul>
    <NavItem><NuxtLink to="/">Home</NuxtLink></NavItem>
    <NavItem><NuxtLink to="/watchlist">Watchlist</NuxtLink></NavItem>
    <NavItem><button @click="toggleDarkMode">Dark Mode</button></NavItem>
    <slot />
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggleDarkMode: 'ui/toggleDarkMode',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
