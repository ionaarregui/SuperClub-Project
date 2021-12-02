import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { getProductsList } from '../../Utils/ProductUtils'
import { getStoresList } from '../../Utils/StoreUtils'
import './Home.css'

const Home = () => {
  let agregarProducto = useRef(null)
  let agregarTienda = useRef(null)

  const [totalProducts, setTotalProducts] = useState(0)
  const [totalStores, setTotalStores] = useState(0)

  useEffect(async () => {
    let products = await getProductsList()
    let stores = await getStoresList()
    setTotalProducts(products.length)
    setTotalStores(stores.length)
  }, [])

  const cambiarWidth = () => {
    console.log(agregarTienda.current)
  }

  return (
    <div className="home colorPrincipal">
      <div className="blockInformation colorItems">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="iconosMenu"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
          </svg>
          <h3>
            <span>{totalProducts}</span> Productos
          </h3>
        </div>
        <div>
          <div className="blockButton">
            <Link to="/products">Ver listado</Link>
          </div>
          <div ref={agregarProducto} className="blockButton">
            <Link to="/products/new">Agregar Producto</Link>
          </div>
        </div>
      </div>
      <div className="blockInformation colorItems">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="iconosMenu"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
          </svg>

          <h3>
            <span>{totalStores}</span> Tiendas
          </h3>
        </div>
        <div>
          <div className="blockButton">
            <Link to="/stores">Ver listado</Link>
          </div>
          <div onLoad={cambiarWidth} className="blockButton">
            <Link to="/stores/new">Agregar Tienda</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
