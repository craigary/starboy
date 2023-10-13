import { parseHTML } from 'linkedom'

export const getMapToken = async () => {
  const response = await fetch('https://developer.apple.com/maps/web/', {
    cache: 'no-store'
  })
  const text = await response.text()
  const { document } = parseHTML(text)
  const tokenEl = document.querySelector('#mapkit-token')
  const token = tokenEl?.dataset?.token ?? ''
  return token
}
