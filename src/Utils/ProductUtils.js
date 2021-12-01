const baseUrl = 'http://dhfakestore1.herokuapp.com/api/products'

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

export const postProduct = async (product) => {
  let body = JSON.stringify(product)
  const res = await fetch(`${baseUrl}`, {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response = await res.json()
  return response
}

export const putProduct = async (id, product) => {
  let body = JSON.stringify(product)
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response = await res.json()
  return response
}

export const deleteProduct = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
  const response = await res.json()
  return response
}
