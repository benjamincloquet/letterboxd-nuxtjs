<template>
  <main>
    <FilmDetails :film-details="filmDetails" />
    <FilmReviews :film-id="filmId" />
  </main>
</template>

<script>
export default {
  async asyncData({ params, $api, error }) {
    try {
      const filmDetails = await $api.tmdb.get(`/movie/${params.filmId}`)
      return { filmDetails, filmId: params.filmId }
    } catch (err) {
      error({ ...err })
    }
  },
}
</script>
