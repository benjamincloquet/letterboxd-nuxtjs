<template>
  <FilmList
    title="Your Watchlist"
    :films="watchlist"
    :number-of-films-to-display="numberOfFilmsToDisplay"
    :link="link"
  >
    <template #inline>
      <p>Add more films !</p>
    </template>
    <template #empty>
      <article
        class="relative border border-stone-300 dark:border-stone-500 rounded overflow-hidden pt-[45%]"
      >
        <div
          class="absolute top-0 w-full h-full flex flex-col gap-2 justify-center items-center p-2 text-center"
        >
          <p class="font-sans font-extralight tracking-wide">
            Your watchlist is empty.<br />Start adding films now!
          </p>
          <SVGLogo class="stroke-stone-700 dark:stroke-stone-100" name="plus" />
        </div>
        <NuxtLink
          :to="`/watchlist`"
          class="absolute top-0 w-full h-full"
          title="Add a new film to your watchlist"
        ></NuxtLink>
      </article>
    </template>
  </FilmList>
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
    numberOfFilmsToDisplayInTeaser: {
      type: Number,
      default() {
        return 6
      },
    },
  },
  data() {
    return {
      watchlist: this.$store.state.user.watchlist,
    }
  },
  computed: {
    numberOfFilmsToDisplay() {
      return this.isTeaser ? this.numberOfFilmsToDisplayInTeaser : 0
    },
    link() {
      return this.isTeaser ? '/watchlist' : null
    },
  },
}
</script>

<style lang="scss" scoped></style>
