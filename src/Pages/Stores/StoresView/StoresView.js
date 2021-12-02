import { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router'
import Button from '../../../Components/Button/Button'
import notImage from '../../../Assets/image-not-found.png'
import { getStore, putStore } from '../../../Utils/StoreUtils'
import Timer from '../../../Utils/Timer'
import './StoresView.css'

const StoresView = () => {
  const navegate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [store, setStore] = useState([])
  const { id } = useParams()

  const name = useRef('')
  const logo = useRef('')
  const email = useRef('')
  const phone = useRef('')

  useEffect(async () => {
    setLoading(true)
    let tienda = await getStore(id)
    setStore(tienda)
    setTimeout(setLoading(false), 1000)

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

    putStore(store._id, storeEdit)
      .then(navegate('/stores'))
      .catch((err) => console.error('Error santanderístico al cargar el producto'))
  }

  return (
    <Timer loading={loading}>
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
            <input className="colorBuscadores" required type="text" ref={name} id="nombre" placeholder="Nombre de tienda..." />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <br />
            <input className="colorBuscadores" required type="text" ref={email} id="email" placeholder="Email..." />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Teléfono</label>
            <br />
            <input className="colorBuscadores" type="phone" ref={phone} id="phone" placeholder="Telefono..." />
          </div>
          <div className="input-group">
            <label htmlFor="image">Logo</label>
            <br />
            <input className="colorBuscadores" type="url" ref={logo} id="image" placeholder="Url de imagen..." />
            <img src={logo} widht="45px" height="45px" alt="" />
          </div>

          <div className="actions">
            <Button
              type="button"
              text="Cancelar"
              callback={() => {
                navegate('/stores')
              }}
            />
            <Button text="Guardar" callback={() => {}} />
          </div>
        </form>
      </div>
    </Timer>
  )
}

export default StoresView
