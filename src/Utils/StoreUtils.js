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

export const postStore = async (
  name,
  email = null,
  city = null,
  street = null,
  number = null,
  zipcode = null,
  lat = null,
  long = null,
  phone = null
) => {
  let body = JSON.stringify({
    name,
    email,
    address: { city, street, number, zipcode, geolocation: { lat, long } },
    phone,
  })
  const res = await fetch(`${baseUrl}`, { method: 'POST', body })
  const response = await res.json()
  return response
}

export const putStore = async (id, store) => {
  console.log(store)
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
