const baseUrl = 'http://dhfakestore1.herokuapp.com/api/stores'

export const getStoresList = async () => {
  const res = await fetch(`${baseUrl}`)
  const products = await res.json()
  return products
}

export const getStore = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`)
  const product = await res.json()
  return product
}

export const postStore = async (store) => {
  let body = JSON.stringify(store)
  console.log(body)
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

export const putStore = async (id, store) => {
  let body = JSON.stringify(store)
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
