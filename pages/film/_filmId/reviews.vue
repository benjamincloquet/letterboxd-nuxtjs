<template>
  <main v-if="reviews">
    <ReviewList
      :title="`Reviews for ${film.title}`"
      :reviews="reviews"
      :number-of-reviews-to-display="numberOfReviewsToDisplay"
    />
  </main>
</template>

<script>
export default {
  async asyncData({ params, $api, error }) {
    try {
      const film = await $api.tmdb.get(`/movie/${params.filmId}`)
      const reviews = (await $api.tmdb.get(`/movie/${params.filmId}/reviews`))
        .results
      return { film, reviews }
    } catch (err) {
      error({ ...err })
    }
  },
  data() {
    return {
      numberOfReviewsToDisplay: 10,
    }
  },
}
</script>

<style lang="scss" scoped></style>
