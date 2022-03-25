export const state = () => ({
  username: 'user',
  watchlist: [],
  reviews: [],
})

export const mutations = {
  toggleFilmInWatchlist(state, filmId) {
    const filmIndexInWatchlist = state.watchlist.indexOf(filmId)
    if (filmIndexInWatchlist === -1) {
      state.watchlist.push(filmId)
    } else {
      state.watchlist.splice(filmIndexInWatchlist, 1)
    }
  },
}
