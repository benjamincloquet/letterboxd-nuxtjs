<template>
  <div
    :class="`fixed top-0 z-40 h-full w-full bg-stone-100 dark:bg-stone-800 p-4 pt-24 transition-transform duration-700 ${
      isVisible ? '' : 'translate-x-full'
    }`"
  >
    <nav>
      <NavItems class="flex flex-col items-center" />
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    isVisible() {
      return this.$store.state.ui.isMobileMenuVisible
    },
  },
  watch: {
    $route() {
      this.closeMenu()
    },
  },
  methods: {
    ...mapMutations({
      closeMenu: 'ui/closeMobileMenu',
    }),
  },
}
</script>
