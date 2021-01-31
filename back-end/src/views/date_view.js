module.exports = {
  render(date) {
    const day = date.getDate() + 1
    const month = date.getMonth() < 10 ? `0` + (date.getMonth() + 1)
      : date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }
}