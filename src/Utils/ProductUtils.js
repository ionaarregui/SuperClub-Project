const baseUrl = 'https://dhfakestore1.herokuapp.com/api/products'

export const getProductsList = async () => {
  const res = await fetch(`${baseUrl}`)
  const products = await res.json()
  return products
}

export const getProduct = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`)
  const product = await res.json()
  return product
}

export const postProduct = async (
  title,
  price,
  description = null,
  image = null,
  gallery = null,
  category = null,
  mostWanted = false,
  store = null
) => {
  let body = JSON.stringify({
    title,
    price,
    description,
    image,
    gallery,
    category,
    mostWanted,
    store,
  })
  const res = await fetch(`${baseUrl}`, { method: 'POST', body })
  const response = await res.json()
  return response
}

export const putProduct = async (
  id,
  title,
  price,
  description = null,
  image = null,
  gallery = null,
  category = null,
  mostWanted = false,
  store = null
) => {
  let body = JSON.stringify({
    id,
    title,
    price,
    description,
    image,
    gallery,
    category,
    mostWanted,
    store,
  })
  const res = await fetch(`${baseUrl}/${id}`, { method: 'PUT', body })
  const response = await res.json()
  return response
}

export const deleteProduct = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
  const response = await res.json()
  return response
}
