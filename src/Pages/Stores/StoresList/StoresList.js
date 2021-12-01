import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getStoresList } from '../../../Utils/StoreUtils'
import './StoresList.css';

const StoresList = () => {
  const [stores, setStores] = useState([])

  useEffect(() => {
    getStoresList().then((data) => setStores(data))
  }, [])

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    },[])

  return (
      <>
      {loading ? <h3>loading...</h3> :
    <ul className="divMain">
      {stores.map((store, i, i2, i3, i4, i5, i6, i7) => {
        return <li key={i} className="tiendas"><img key={i2} src={store.logo} alt="Foto tienda" className="imagenesTiendas"></img><div key={i3} className="listaStores"> <h3 key={i4}>{store.name}</h3> <h4 key={i5}>#{store._id}</h4></div><Link key={i6} to={`/stores/${store._id}`} className="flechita"><img key={i7} src="flechita.svg" alt="Foto flechita"></img></Link></li>
      })}
    </ul>}
    </>
  )
}

export default StoresList
