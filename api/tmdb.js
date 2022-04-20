function wait(timeout, fn) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const result = await fn()
        resolve(result)
      } catch (err) {
        reject(err)
      }
    }, timeout)
  })
}

export default (http) => ({
  async get(params, searchParams, timeout = 0) {
    const result = await wait(timeout, () => {
      return http.$get(`https://api.themoviedb.org/3${params}`, {
        searchParams: { ...searchParams, api_key: process.env.tmdbAPIKey },
      })
    })
    return result
  },
})
