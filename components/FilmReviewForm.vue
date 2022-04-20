<template>
  <PageSection title="Your Review">
    <div v-if="review">
      <UserReview
        :vote="review.vote"
        :text="review.text"
        :author="review.author"
      />
      <ReviewButton class="w-full md:w-auto" @click="editReview(review)"
        >Edit your review
      </ReviewButton>
    </div>
    <ReviewButton v-else @click="writeNewReview"
      >Write a review for this film
    </ReviewButton>
  </PageSection>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    filmId: {
      type: String,
      default() {
        return null
      },
    },
  },
  computed: {
    review() {
      return this.getReview()(this.filmId)
    },
  },
  methods: {
    ...mapMutations({
      openReviewForm: 'ui/openReviewForm',
    }),
    ...mapGetters({
      getReview: 'user/getReview',
    }),
    editReview(review) {
      this.openReviewForm(review)
    },
    writeNewReview() {
      this.openReviewForm({
        filmId: this.filmId,
        author: 'you',
        text: null,
        vote: 4,
      })
    },
  },
}
</script>
