<template>
  <p v-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </p>
  <FilmList
    v-else
    title="Search results"
    :films="results"
    :placeholder="$fetchState.pending"
  />
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      results: null,
    }
  },
  async fetch() {
    const params = {
      language: 'en-US',
      query: this.query,
      page: 1,
      include_adult: false,
    }
    this.results = (
      await this.$nuxt.context.$api.tmdb.get(`/search/movie`, params)
    ).results
  },
  fetchOnServer: false,
}
</script>

<style lang="scss" scoped></style>
