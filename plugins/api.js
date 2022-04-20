import tmdb from '@/api/tmdb'

export default (context, inject) => {
  const factories = {
    tmdb: tmdb(context.$http),
  }

  // Inject $api
  inject('api', factories)
}
