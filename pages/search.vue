<template>
  <main>
    <SearchResults :query="query" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      query: this.$route.query.query,
    }
  },
}
</script>

<style lang="scss" scoped></style>
