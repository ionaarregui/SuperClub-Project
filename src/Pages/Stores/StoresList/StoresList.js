import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getStoresList } from '../../../Utils/StoreUtils'
import Timer from '../../../Utils/Timer'
import './StoresList.css'
import notImage from '../../../Assets/image-not-found.png'

const StoresList = ({ searchContext }) => {
  const [stores, setStores] = useState([])

  let { search } = useContext(searchContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getStoresList().then((data) => {
      setStores(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Timer loading={loading}>
      <ul className="divMain">
        {stores
          .filter((store) => store.name.toLowerCase().includes(search.toLowerCase()))
          .map((store, i, i2, i3, i4, i5, i6, i7) => {
            return (
              <li key={i} className="tiendas">
                <img key={i2} src={store.logo || notImage} alt="Foto tienda" className="imagenesTiendas"></img>
                <div key={i3} className="listaStores">
                  <h3 key={i4}>{store.name}</h3>
                  <h4 key={i5}>#{store._id}</h4>
                </div>
                <Link key={i6} to={`/stores/${store._id}`} className="flechita">
                  <img key={i7} src="flechita.svg" alt="Foto flechita"></img>
                </Link>
              </li>
            )
          })}
      </ul>
    </Timer>
  )
}

export default StoresList
