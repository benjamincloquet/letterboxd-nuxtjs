<template>
  <div class="mb-4">
    <div v-if="author" class="flex gap-2 mb-2 items-start">
      <span>
        <span class="subtitle text-sm">Review by </span>
        <span class="font-sans uppercase tracking-wider text-sm">{{
          author
        }}</span>
      </span>
      <div class="flex items-center pt-[0.2rem] gap-2">
        <span v-if="vote" class="subtitle text-sm">{{ vote }}</span>
        <VotingWidget v-if="vote" :vote="vote" />
      </div>
    </div>
    <p
      v-if="text"
      class="text-clamp before:content-['\201C'] after:content-['\201D']"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      default() {
        return null
      },
    },
    vote: {
      type: Number,
      default() {
        return null
      },
    },
    text: {
      type: String,
      default() {
        return null
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
