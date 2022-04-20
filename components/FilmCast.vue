<template>
  <PageSection title="Cast">
    <ul v-if="placeholder">
      <li v-for="index in 3" :key="index" class="mb-4 last:mb-0">
        <ActorCard :placeholder="placeholder" />
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="actor in filmCast.slice(0, 3)"
        :key="actor.id"
        class="mb-4 last:mb-0"
      >
        <ActorCard :actor="actor" :placeholder="placeholder" />
      </li>
    </ul>
  </PageSection>
</template>

<script>
export default {
  props: {
    filmCast: {
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
  },
}
</script>
