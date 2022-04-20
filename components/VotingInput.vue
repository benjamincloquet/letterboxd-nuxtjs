<template>
  <div class="container relative flex mb-4">
    <input
      v-for="index in maxVote * 2"
      :key="index"
      type="radio"
      name="vote"
      :value="index / 2"
      required
      class="relative z-[70] w-4 h-8 border-0 rounded-none bg-stone-700 text-stone-700 checked:bg-none cursor-pointer"
      :checked="modelValue === index / 2"
      @input="$emit('update:modelValue', parseFloat($event.target.value))"
    />
    <div class="absolute top-0 left-0 h-full flex overflow-hidden">
      <SVGLogo
        v-for="index in maxVote"
        :key="index"
        class="stroke-stone-700 fill-stone-100 dark:stroke-stone-100 dark:fill-stone-800 w-8"
        name="star"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      maxVote: 5,
    }
  },
}
</script>

<style lang="scss" scoped>
input[type='radio'] {
  -webkit-mask: url('../assets/svg/star.svg') no-repeat 0% 100%;
  mask: url('../assets/svg/star.svg') no-repeat 0% 100%;
  -webkit-mask-size: cover;
  mask-size: cover;

  &:nth-child(even) {
    mask-position: 100% 100%;
  }

  &:hover ~ & {
    background-color: theme('colors.stone.400');

    .dark & {
      background-color: theme('colors.stone.600');
    }
  }
}
.container:not(:hover) > input:checked ~ input {
  background-color: theme('colors.stone.400');

  .dark & {
    background-color: theme('colors.stone.600');
  }
}
.icon {
  transform: scale(1.2);
}
</style>
