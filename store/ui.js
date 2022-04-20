export const state = () => ({
  isMobileMenuVisible: false,
  isMobileSearchBarVisible: false,
  review: null,
  isDarkMode: false,
})

export const mutations = {
  openMobileMenu(state) {
    state.isMobileMenuVisible = true
  },
  closeMobileMenu(state) {
    state.isMobileMenuVisible = false
  },
  toggleMobileMenu(state) {
    state.isMobileMenuVisible = !state.isMobileMenuVisible
  },
  openMobileSearchBar(state) {
    state.isMobileSearchBarVisible = true
  },
  closeMobileSearchBar(state) {
    state.isMobileSearchBarVisible = false
  },
  toggleMobileSearchBar(state) {
    state.isMobileSearchBarVisible = !state.isMobileSearchBarVisible
  },
  openReviewForm(state, review) {
    state.review = review
  },
  closeReviewForm(state) {
    state.review = null
  },
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode
    document.documentElement.classList.toggle('dark')
  },
}
