export const state = () => ({
  username: 'user',
  watchlist: [],
  reviews: [],
})

export const getters = {
  isInWatchlist: (state) => (filmId) => {
    return state.watchlist.some((film) => film.id === filmId)
  },
  getReview: (state) => (filmId) => {
    return state.reviews.find((review) => review.filmId === filmId)
  },
}

export const mutations = {
  addFilmToWatchlist(state, film) {
    state.watchlist.push(film)
  },
  removeFilmFromWatchlist(state, filmToRemove) {
    state.watchlist = state.watchlist.filter(
      (film) => film.id !== filmToRemove.id
    )
  },
  addReview(state, review) {
    const reviewIndex = state.reviews.findIndex(
      (existingReview) => existingReview.filmId === review.filmId
    )
    if (reviewIndex > -1) {
      state.reviews.splice(reviewIndex, 1, review)
    } else {
      state.reviews.push(review)
    }
  },
  removeReview(state, reviewToRemove) {
    state.reviews = state.reviews.filter(
      (review) => review.filmId !== reviewToRemove.filmId
    )
  },
}

export const actions = {
  toggleFilmInWatchlist({ commit, getters }, filmToToggle) {
    if (getters.isInWatchlist(filmToToggle.id)) {
      commit('removeFilmFromWatchlist', filmToToggle)
    } else {
      commit('addFilmToWatchlist', filmToToggle)
    }
  },
  addReview({ commit }, review) {
    // async to allow api call in prod scenario
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('addReview', review)
        resolve()
      }, 1000)
    })
  },
}
