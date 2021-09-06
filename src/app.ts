export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault()
      // eslint-disable-next-line no-console
      console.error(err.message)
    }
  }
}
