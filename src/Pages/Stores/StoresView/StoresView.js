import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import Button from '../../../Components/Button/Button'
import notImage from '../../../Assets/image-not-found.png'
import { getStore, putStore } from '../../../Utils/StoreUtils'
import './StoresView.css'

const StoresView = () => {
  const [store, setStore] = useState([])
  const { id } = useParams()

  const name = useRef('')
  const logo = useRef('')
  const email = useRef('')
  const phone = useRef('')

  useEffect(async () => {
    let tienda = await getStore(id)
    console.log(tienda)
    setStore(tienda)
    name.current.value = tienda.name || ''
    logo.current.value = tienda.logo || ''
    email.current.value = tienda.email || ''
    phone.current.value = tienda.phone || ''
    console.log(store.address)
  }, [])

  const sendForm = (e) => {
    e.preventDefault()
    let storeEdit = {
      _id: store._id,
      address: store.address,
      name: name.current.value,
      logo: logo.current.value,
      email: email.current.value,
      phone: phone.current.value,
    }

    putStore(store._id, storeEdit).catch((err) => console.error('Error santanderístico al cargar el producto'))
  }

  return (
    <>
      <div className="product colorPrincipal">
        <div className="product-img">
          <img src={store.logo ? store.logo : notImage} alt={store.name} />
        </div>
        <div>
          <h3>{store.name}</h3>
        </div>
      </div>
      <div className="form-container colorPrincipal">
        <h3>Información</h3>
        <form onSubmit={sendForm}>
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <br />
            <input className="colorBuscadores" required type="text" ref={name} id="nombre" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input className="colorBuscadores" required type="text" ref={email} id="email" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <br />
            <input className="colorBuscadores" type="phone" ref={phone} id="phone" />
          </div>
          <div className="input-group">
            <label htmlFor="image">Logo</label>
            <br />
            <input className="colorBuscadores" type="text" ref={logo} id="image" placeholder="Url de imagen..." />
            <img src={logo} widht="45px" height="45px" alt="" />
          </div>

          <div className="actions">
            <Button type="button" text="Cancelar" callback={() => {}} />
            <Button text="Guardar" callback={() => {}} />
          </div>
        </form>
      </div>
    </>
  )
}

export default StoresView
