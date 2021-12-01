import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProductsList } from '../../../Utils/ProductUtils'
import Timer from '../../../Utils/Timer'
import './ProductsList.css'

const ProductsList = ({ searchContext }) => {
  const [products, setProducts] = useState([])

  let { search } = useContext(searchContext)

  useEffect(() => {
    getProductsList().then((data) => setProducts(data))
  }, [])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProductsList().then((data) => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  return (
    <Timer loading={loading}>
      <ul className="divMain">
        {products
          .filter((prod) => prod.title.toLowerCase().includes(search.toLowerCase()))
          .map((prod, i, i2, i3, i4, i5, i6, i7) => {
            return (
              <li key={i} className="productos colorItems">
                <img key={i2} src={prod.image} alt="Foto producto" className="imagenesProductos"></img>
                <div key={i3} className="listaProductos">
                  <h3 key={i4}>{prod.title}</h3>
                  <h4 key={i5}>#{prod._id}</h4>
                </div>
                <Link key={i6} to={`/products/${prod._id}`} className="flechita">
                  <img key={i7} src="flechita.svg" alt="Foto flechita"></img>
                </Link>
              </li>
            )
          })}
      </ul>
    </Timer>
  )
}

export default ProductsList
