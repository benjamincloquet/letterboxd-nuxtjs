<template>
  <p v-if="$fetchState.pending">Loading....</p>
  <p v-else-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </p>
  <div v-else-if="details">
    <div>
      <h1>{{ details.title }}</h1>
      <p>
        <span>{{ details.vote_average / 2 }}</span>
        <span>&nbsp;({{ details.vote_count }} votes)</span>
      </p>
      <p>
        <span>{{ release_year }}</span>
        <span v-if="director">
          <span> · Directed by </span>
          <span>{{ director.name }}</span>
        </span>
      </p>
      <p>
        <span v-for="genre in details.genres" :key="genre.id">
          {{ genre.name }}
        </span>
      </p>
      <p>
        <span
          v-for="language in details.spoken_languages"
          :key="language.iso_639_1"
        >
          {{ language.english_name }}
        </span>
        <span>·</span>
        <span>{{ details.runtime }}min</span>
      </p>
    </div>
    <div>
      <h2>{{ details.tagline }}</h2>
      <p>{{ details.overview }}</p>
    </div>
    <div>
      <button @click="toggleFilmInWatchlist(filmId)">
        <span v-if="isInWatchlist">Remove from watchlist</span>
        <span v-else>Add to watchlist</span>
      </button>
    </div>
    <div>
      <p>Cast</p>
      <ul>
        <li v-for="actor in credits.cast.slice(0, 3)" :key="actor.id">
          <img
            :src="`https://image.tmdb.org/t/p/w45/${actor.profile_path}`"
            :alt="`${actor.name}`"
          />
          <div>
            <p>{{ actor.name }}</p>
            <p>{{ actor.character }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <p>My review</p>
      <p>No review yet.</p>
    </div>
    <div>
      <p>Popular reviews</p>
      <ul>
        <li v-for="review in reviews.results.slice(0, 10)" :key="review.id">
          <div>
            <span>Review by </span>
            <span>{{ review.author }}</span>
            <span>{{ review.author_details.rating / 2 }}</span>
          </div>
          <p>{{ review.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      filmId: this.$route.params.id,
      details: {},
      credits: {},
      reviews: {},
    }
  },
  async fetch() {
    this.details = await fetch(
      `https://api.themoviedb.org/3/movie/${this.filmId}?api_key=${process.env.TMDB_API_KEY}`
    ).then(async (res) => {
      const json = await res.json()
      if (json.success === false) {
        throw new Error(json.status_message)
      }
      return json
    })
    this.credits = await fetch(
      `https://api.themoviedb.org/3/movie/${this.filmId}/credits?api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json())
    this.reviews = await fetch(
      `https://api.themoviedb.org/3/movie/${this.filmId}/reviews?api_key=${process.env.TMDB_API_KEY}`
    ).then((res) => res.json())
  },
  computed: {
    release_year() {
      return new Date(this.details.release_date).getFullYear()
    },
    director() {
      return this.credits.crew.find((member) => member.job === 'Director')
    },
    isInWatchlist() {
      return this.$store.state.watchlist.includes(this.filmId)
    },
  },
  methods: {
    ...mapMutations(['toggleFilmInWatchlist']),
  },
}
</script>

<style lang="scss" scoped></style>
