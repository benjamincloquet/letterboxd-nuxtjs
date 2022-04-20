<template>
  <div class="flex items-center relative">
    <div
      class="w-14 h-14 rounded-full overflow-hidden bg-stone-200 dark:bg-stone-800"
    >
      <img
        v-if="actor"
        :src="`https://image.tmdb.org/t/p/w185/${actor.profile_path}`"
        :alt="`${actor.name}`"
        class="w-full h-full object-cover fadein"
      />
    </div>
    <div v-if="actor" class="pl-4">
      <p class="font-sans uppercase tracking-wider text-bold">
        {{ actor.name }}
      </p>
      <p class="font-sans font-extralight text-sm">{{ actor.character }}</p>
    </div>
    <NuxtLink
      v-if="actor"
      :to="`/person/${actor.id}`"
      class="absolute top-0 w-full h-full"
    />
  </div>
</template>

<script>
export default {
  props: {
    actor: {
      type: Object,
      default() {
        return null
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
