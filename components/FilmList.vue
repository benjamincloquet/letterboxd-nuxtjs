<template>
  <PageSection :title="title" :link="link">
    <ul
      v-if="placeholder"
      :class="`grid gap-4 grid-cols-3 md:grid-cols-4 grid-rows-[${
        numberOfPlaceholderItemsToDisplay / 3
      }]`"
    >
      <li v-for="index in numberOfPlaceholderItemsToDisplay" :key="index">
        <FilmListItem :placeholder="placeholder" />
      </li>
    </ul>
    <ul
      v-else
      :class="`grid gap-4 grid-cols-3 md:grid-cols-4 grid-rows-[${
        filmsToDisplay.length / 3
      }]`"
    >
      <li v-for="film in filmsToDisplay" :key="film.id">
        <FilmListItem :film-details="film" :placeholder="placeholder" />
      </li>
      <li v-if="films.length === 0" class="col-span-3 md:col-span-4">
        <slot name="empty"></slot>
      </li>
    </ul>
  </PageSection>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return null
      },
    },
    films: {
      type: Array,
      default() {
        return null
      },
    },
    placeholder: {
      type: Boolean,
      default() {
        return false
      },
    },
    link: {
      type: String,
      default() {
        return null
      },
    },
    numberOfFilmsToDisplay: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  computed: {
    filmsToDisplay() {
      return this.numberOfFilmsToDisplay > 0
        ? this.films.slice(0, this.numberOfFilmsToDisplay)
        : this.films
    },
    numberOfPlaceholderItemsToDisplay() {
      return this.numberOfFilmsToDisplay > 0 ? this.numberOfFilmsToDisplay : 3
    },
  },
}
</script>

<style lang="scss" scoped></style>
