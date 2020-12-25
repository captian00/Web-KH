export const toDateString = (date) => {
    let start = new Date(date)
    let startDateString = `${start.getDate()}/${
      start.getMonth() + 1 < 10 ? '0' + (start.getMonth() + 1) : start.getMonth() + 1
    }/${start.getFullYear()}`
    return startDateString
  }