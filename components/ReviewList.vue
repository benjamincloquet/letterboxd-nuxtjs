<template>
  <PageSection :title="title" :link="link">
    <ul v-if="placeholder">
      <li v-for="index in numberOfPlaceholderItemsToDisplay" :key="index">
        <UserReview :placeholder="placeholder" />
      </li>
    </ul>
    <ul v-else>
      <li
        v-for="review in reviewsToDisplay"
        :key="review.id"
        class="border-t border-t-stone-300 dark:border-t-stone-700 pt-4 pb-4 first:border-t-0 first:pt-0 last:mb-0"
      >
        <UserReview
          :author="review.author"
          :vote="review.author_details.rating / 2"
          :text="review.content"
        />
      </li>

      <li v-if="reviewsToDisplay.length === 0" class="col-span-3 md:col-span-4">
        <p>No reviews for this film yet.</p>
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
    reviews: {
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
    numberOfReviewsToDisplay: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  computed: {
    reviewsToDisplay() {
      return this.numberOfReviewsToDisplay > 0
        ? this.reviews.slice(0, this.numberOfReviewsToDisplay)
        : this.reviews
    },
    numberOfPlaceholderItemsToDisplay() {
      return this.numberOfFilmsToDisplay > 0 ? this.numberOfReviewsToDisplay : 3
    },
  },
}
</script>

<style lang="scss" scoped></style>
