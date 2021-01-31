module.exports = {
  render(date) {
    const day = date.getDate()
    const month = date.getMonth() < 10 ? `0` + (date.getMonth() + 1)
      : date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }
}