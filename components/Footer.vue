<template>
  <footer class="border-t border-t-stone-300 dark:border-t-stone-700 mt-8">
    <Container class="flex justify-between px-4 pt-8 pb-8">
      <p
        class="text-stone-700 dark:text-stone-400 tracking-wider font-sans font-extralight"
      >
        Made by
        <a class="underline" href="https://benjamincloquet.github.io/resume/">
          Benjamin Cloquet</a
        >. Film data from
        <a class="underline" href="https://www.themoviedb.org/">TMDb</a>
      </p>
    </Container>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      toggleMobileMenu: 'ui/toggleMobileMenu',
      toggleMobileSearchBar: 'ui/toggleMobileSearchBar',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
