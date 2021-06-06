export default () => {
  const element = document.createElement('h2')

  element.textContent = 'Hello world'
    // log111
  console.lg('111')
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
}
