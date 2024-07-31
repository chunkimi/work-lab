export const getImage = (path) => {
  return new URL(`../${path}`, import.meta.url).href
}
