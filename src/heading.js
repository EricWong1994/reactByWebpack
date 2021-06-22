const Head = () => {
  const element = document.createElement('h2')

  element.textContent = 'Hello world'
    // log111
  console.lg('111')
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
  console.log(2222)
}
export default Head

// 未引用代码
export const Link = () => {
  return document.createElement('a')
}
// 未引用代码
export const Heading = level => {
  return document.createElement('h' + level)
}
