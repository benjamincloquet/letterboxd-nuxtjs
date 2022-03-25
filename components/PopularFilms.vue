<template>
  <p v-if="$fetchState.pending">Loading....</p>
  <p v-else-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </p>
  <div v-else-if="popularFilms">
    <p>Popular films</p>
    <FilmCard
      v-for="film in popularFilms.slice(0, 4)"
      :key="film.id"
      :details="film"
    />
  </div>
</template>

<script>
import FilmCard from './FilmCard.vue';
export default {
  components: {
    FilmCard,
  },
  data() {
    return {
      popularFilms: {},
    };
  },
  async fetch() {
    this.popularFilms = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    ).then(async (res) => {
      const json = await res.json();
      if (json.success === false) {
        throw new Error(json.status_message);
      }
      return json.results;
    });
  },
};
</script>

<style lang="scss" scoped></style>
