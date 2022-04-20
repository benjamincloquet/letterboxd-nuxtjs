<template>
  <p v-if="$fetchState.error">
    {{ $fetchState.error.message }}
  </p>
  <section v-else>
    <Container>
      <BackdropImage
        :path="filmDetails.backdrop_path"
        :alt="filmDetails.title"
        class="mdl:px-4"
      />
      <header class="grid gap-4 grid-cols-5 grid-rows-1">
        <div class="col-span-3 p-4 flex flex-col justify-center">
          <h1 class="font-sans text-2xl font-bold mb-2 tracking-wide">
            {{ filmDetails.title }}
          </h1>
          <div class="font-sans font-extralight tracking-wider mb-2">
            <div class="flex flex-wrap items-start gap-2">
              <span>{{ filmDetails.vote_average / 2 }}</span>
              <VotingWidget :vote="filmDetails.vote_average / 2" />
              <span class="text-sm">({{ filmDetails.vote_count }} votes)</span>
            </div>
          </div>
          <p class="mb-2">
            <span class="font-sans font-extralight tracking-wider text-sm">{{
              release_year
            }}</span>
            <span v-if="director">
              <span class="subtitle text-sm before:content-['·']">
                Directed by
              </span>
              <span class="font-bold block">
                <NuxtLink :to="`/person/${director.id}`">
                  {{ director.name }}
                </NuxtLink>
              </span>
            </span>
          </p>
          <p class="font-sans text-sm font-extralight tracking-wider mb-10">
            <span v-if="filmDetails.genres">
              {{ filmDetails.genres[0].name }}
            </span>
            <span>·</span>
            <span>{{ filmDetails.runtime }}min</span>
          </p>

          <FilmOverview
            class="hidden md:block mb-8"
            :overview="filmDetails.overview"
            :tagline="filmDetails.tagline"
          />

          <WatchlistWidget class="hidden md:flex" :film="filmDetails" />
        </div>
        <div class="col-span-2 p-4">
          <PosterImage
            :path="filmDetails.poster_path"
            :alt="filmDetails.title"
          />
        </div>
      </header>

      <FilmOverview
        class="md:hidden p-4"
        :overview="filmDetails.overview"
        :tagline="filmDetails.tagline"
      />

      <div class="p-4">
        <WatchlistWidget class="md:hidden w-full" :film="filmDetails" />
      </div>
      <FilmCast v-if="$fetchState.pending" :placeholder="true" />
      <FilmCast v-else :film-cast="filmCredits.cast" />
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    filmDetails: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      filmCredits: null,
    }
  },
  async fetch() {
    this.filmCredits = await this.$nuxt.context.$api.tmdb.get(
      `/movie/${this.filmDetails.id}/credits`
    )
  },
  fetchOnServer: false,
  computed: {
    release_year() {
      return new Date(this.filmDetails.release_date).getFullYear()
    },
    director() {
      return this.filmCredits?.crew?.find((member) => member.job === 'Director')
    },
  },
}
</script>

<style lang="scss" scoped></style>
