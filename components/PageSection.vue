<template>
  <Container>
    <section class="p-4 mb-4">
      <div
        class="pb-2 mb-4 border-b border-b-stone-700 dark:border-b-stone-600 flex justify-between"
      >
        <p v-if="title" class="subtitle">
          {{ title }}
        </p>
        <NuxtLink v-if="link" :to="link"
          ><span class="subtitle">More ...</span></NuxtLink
        >
      </div>
      <slot />
    </section>
  </Container>
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
    link: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
