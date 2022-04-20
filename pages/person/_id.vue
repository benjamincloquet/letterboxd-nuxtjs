<template>
  <main>
    <FilmList
      v-if="starring"
      :title="`Films starring ${person.name}`"
      :films="starring"
    />
    <FilmList
      v-if="directed"
      :title="`Films directed by ${person.name}`"
      :films="directed"
    />
  </main>
</template>

<script>
export default {
  async asyncData({ params, $api, error }) {
    try {
      const person = await $api.tmdb.get(`/person/${params.id}`)
      const credits = await $api.tmdb.get(`/person/${params.id}/movie_credits`)
      return { person, starring: credits.cast, directed: credits.crew }
    } catch (err) {
      error({ ...err })
    }
  },
}
</script>

<style lang="scss" scoped></style>
