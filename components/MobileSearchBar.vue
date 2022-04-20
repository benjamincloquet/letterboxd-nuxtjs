<template>
  <div
    :class="`fixed z-30 w-full bg-stone-100 dark:bg-stone-800 drop-shadow-lg transition-transform duration-300 ${
      isVisible ? '' : '-translate-y-full'
    }`"
  >
    <Container class="p-4 pt-2">
      <form action="" class="flex gap-2" @submit.stop.prevent="onSubmit">
        <input
          v-model="query"
          type="text"
          class="grow rounded bg-white border border-stone-300 dark:border-stone-700 dark:text-stone-800 placeholder:text-stone-300 placeholder:tracking-wide"
          placeholder="Type a film title..."
        />
        <button
          type="submit"
          class="border border-stone-300 dark:border-stone-500 rounded flex gap-2 justify-center items-center px-4 py-2 text-center"
        >
          <span class="font-sans font-extralight tracking-wide">
            {{ submitting ? 'Searching...' : 'Search' }}
          </span>
        </button>
      </form>
    </Container>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      query: null,
      submitting: false,
    }
  },
  computed: {
    isVisible() {
      return this.$store.state.ui.isMobileSearchBarVisible
    },
  },
  watch: {
    $route() {
      this.closeMenu()
    },
  },
  methods: {
    ...mapMutations({
      closeMenu: 'ui/closeMobileSearchBar',
    }),
    onSubmit() {
      if (this.query) {
        this.$router.push({
          path: '/search',
          query: { query: this.query },
        })
      }
    },
  },
}
</script>
