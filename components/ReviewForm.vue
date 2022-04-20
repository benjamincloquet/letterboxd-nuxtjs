<template>
  <section
    :class="`fixed top-0 z-50 h-full w-full p-4 bg-stone-700/75 transition-opacity duration-200 ${
      review ? '' : 'opacity-0 pointer-events-none'
    }`"
  >
    <Container class="h-full md:flex md:flex-col md:h-auto max-w-2xl">
      <div
        class="w-full h-full pt-4 pt-10 bg-stone-100 dark:bg-stone-800 rounded relative"
      >
        <button class="absolute top-2 right-2" @click="closeForm()">
          <SVGLogo
            class="stroke-stone-700 dark:stroke-stone-100"
            name="cross"
          />
        </button>

        <PageSection title="Your Review">
          <form action="" class="flex flex-col" @submit.stop.prevent="onSubmit">
            <textarea
              v-model="reviewText"
              name="reviewText"
              class="w-full h-40 p-2 mb-4 rounded"
              required
            />
            <p class="subtitle">Your Rating</p>
            <VotingInput
              :model-value="reviewVote"
              @update:modelValue="(newValue) => (reviewVote = newValue)"
            />
            <button
              type="submit"
              class="border border-stone-300 dark:border-stone-500 rounded flex gap-2 justify-center items-center p-2 text-center self-end"
            >
              <span class="font-sans font-extralight tracking-wide">
                {{ submitting ? 'Submitting review...' : 'Save review' }}
              </span>
              <SVGLogo
                class="stroke-stone-700 dark:stroke-stone-100"
                name="pen"
              />
            </button>
          </form>
        </PageSection>
      </div>
    </Container>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      reviewVote: null,
      reviewText: null,
      submitting: false,
    }
  },
  computed: {
    review() {
      return this.$store.state.ui.review
    },
  },
  watch: {
    review(newReview) {
      if (newReview) {
        this.reviewVote = this.review.vote
        this.reviewText = this.review.text
      }
    },
  },
  methods: {
    onSubmit() {
      const newReview = {
        ...this.review,
        text: this.reviewText,
        vote: this.reviewVote,
      }
      this.submitting = true
      this.$store.dispatch('user/addReview', newReview).then(() => {
        this.closeForm()
        this.submitting = false
      })
    },
    ...mapMutations({
      closeForm: 'ui/closeReviewForm',
    }),
  },
}
</script>
