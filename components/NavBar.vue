<template>
  <section class="sticky top-0 z-50 bg-stone-100 dark:bg-stone-800">
    <Container class="flex justify-between px-4 py-2">
      <div class="relative flex items-center gap-x-2">
        <SVGLogo class="stroke-stone-700 dark:stroke-stone-100" name="box" />
        <h1 class="font-sans text-2xl font-bold tracking-wider">cinemate</h1>
        <NuxtLink
          to="/"
          class="absolute top-0 w-full h-full"
          title="Return to homepage"
        ></NuxtLink>
      </div>
      <nav class="hidden md:block">
        <NavItems class="h-full flex items-center">
          <li class="flex items-center">
            <SearchButton class="ml-4"> </SearchButton>
          </li>
        </NavItems>
      </nav>
      <div class="md:hidden flex items-center">
        <ul class="flex gap-4">
          <li class="flex items-center">
            <SearchButton />
          </li>
          <li class="flex items-center">
            <button aria-label="Navigation" @click="toggleMobileMenu">
              <SVGLogo
                class="stroke-stone-700 dark:stroke-stone-100"
                name="menu"
              />
            </button>
          </li>
        </ul>
      </div>
    </Container>
  </section>
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
