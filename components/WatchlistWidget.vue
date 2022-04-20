<template>
  <button
    v-if="film"
    class="text-left px-3 py-4 border border-stone-300 dark:border-stone-500 rounded font-sans font-extralight tracking-wide flex gap-2 items-center"
    @click="toggleFilmInWatchlist(film)"
  >
    <SVGLogo class="stroke-stone-700 dark:stroke-stone-100" name="bookmark" />
    <span v-if="isInWatchlist">Remove this film from your watchlist</span>
    <span v-else>Add this film to your watchlist</span>
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    film: {
      type: Object,
      default() {
        return null
      },
    },
  },
  computed: {
    isInWatchlist() {
      return this.$store.getters['user/isInWatchlist'](this.film.id)
    },
  },
  methods: {
    ...mapActions({
      toggleFilmInWatchlist: 'user/toggleFilmInWatchlist',
    }),
  },
}
</script>
