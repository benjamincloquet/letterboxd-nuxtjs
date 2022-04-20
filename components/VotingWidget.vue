<template>
  <div class="flex relative">
    <SVGLogo
      v-for="index in maxVote"
      :key="index"
      class="stroke-stone-700 fill-stone-100 dark:stroke-stone-100 dark:fill-stone-800"
      name="star"
    />
    <div
      class="absolute top-0 left-0 h-full flex overflow-hidden"
      :style="style"
    >
      <SVGLogo
        v-for="index in maxVote"
        :key="index"
        class="stroke-stone-700 fill-stone-700 dark:stroke-stone-100 dark:fill-stone-100"
        name="star"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vote: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      maxVote: 5,
    }
  },
  computed: {
    style() {
      return {
        width: `${Math.round((this.vote * 100) / this.maxVote)}%`,
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
