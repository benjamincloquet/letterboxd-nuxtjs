<template>
  <p v-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </p>
  <FilmList
    v-else
    title="Popular films"
    :films="popularFilms"
    :placeholder="$fetchState.pending"
    :number-of-films-to-display="numberOfFilmsToDisplay"
    :link="link"
  />
</template>

<script>
export default {
  props: {
    isTeaser: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      popularFilms: null,
      numberOfFilmsToDisplayInTeaser: 12,
    }
  },
  async fetch() {
    this.popularFilms = (
      await this.$nuxt.context.$api.tmdb.get(`/movie/popular`)
    ).results
  },
  computed: {
    numberOfFilmsToDisplay() {
      return this.isTeaser ? this.numberOfFilmsToDisplayInTeaser : 0
    },
    link() {
      return this.isTeaser ? '/popular' : null
    },
  },
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped></style>
