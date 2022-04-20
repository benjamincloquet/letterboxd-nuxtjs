<template>
  <p v-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </p>
  <div v-else>
    <FilmReviewForm :film-id="filmId" />
    <ReviewList
      title="Popular Reviews"
      :reviews="reviews"
      :placeholder="$fetchState.pending"
      :number-of-reviews-to-display="numberOfReviewsToDisplay"
      :link="`/film/${filmId}/reviews`"
    />
  </div>
</template>

<script>
export default {
  props: {
    filmId: {
      type: String,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      reviews: [],
      numberOfReviewsToDisplay: 3,
    }
  },
  async fetch() {
    this.reviews = (
      await this.$nuxt.context.$api.tmdb.get(`/movie/${this.filmId}/reviews`)
    ).results
  },
  fetchOnServer: false,
}
</script>
