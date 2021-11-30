import { useEffect, useState } from 'react'
import { getProductsList } from '../../../Utils/ProductUtils'

const ProductsList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsList().then((data) => setProducts(data))
  }, [])

  return (
    <div>
      {products.map((prod, i) => {
        return <li key={i}>{prod.title}</li>
      })}
    </div>
  )
}

export default ProductsList
