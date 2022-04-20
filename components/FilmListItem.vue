<template>
  <article
    class="relative bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded overflow-hidden drop-shadow-sm hover:-translate-y-0.5 transition-transform"
  >
    <PosterImage :path="filmDetails.poster_path" :alt="filmDetails.title" />
    <NuxtLink
      v-if="!placeholder"
      :to="`/film/${filmDetails.id}`"
      class="absolute top-0 w-full h-full"
      :title="filmDetails.title"
    ></NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    filmDetails: {
      type: Object,
      default() {
        return { title: '', path: '' }
      },
    },
    placeholder: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
