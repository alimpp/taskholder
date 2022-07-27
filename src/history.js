export const history = () => {
  let history = new Date()
  let year = history.getFullYear()
  let mount = history.getMonth()
  let date = history.getDate()
  return `${year} / ${mount} / ${date}`
}