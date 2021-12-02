import { useRef } from 'react'
import { postStore } from '../../../Utils/StoreUtils'
import Button from '../../../Components/Button/Button'
import './NewStore.css'
import { useNavigate } from 'react-router'

const NewStore = () => {
  let name = useRef('')
  let logo = useRef('')
  let email = useRef('')
  let phone = useRef('')

  const navigate = useNavigate()

  const submitStore = (e) => {
    e.preventDefault()
    let store = {
      name: name.current.value,
      logo: logo.current.value,
      email: email.current.value,
      phone: phone.current.value,
    }
    postStore(store)
      .then(() => navigate('/stores'))
      .catch((err) => console.error('Error santanderístico al cargar la tienda'))
  }

  return (
    <>
      <div className="form-container colorPrincipal">
        <form method="POST" action="/stores" onSubmit={submitStore}>
          <h3>Información</h3>
          <p>Nombre de la tienda</p>
          <br />
          <input className="colorBuscadores" ref={name} id="name" name="name" type="text" placeholder="Nombre del producto" required></input>
          <br />
          <p>Url del logo</p>
          <br />
          <input className="colorBuscadores" ref={logo} id="logo" name="logo" type="text" placeholder="Ingrese URL de la imagen"></input>
          <br />
          <p>Email</p>
          <br />
          <input className="colorBuscadores" ref={email} id="email" type="email" required />
          <br />
          <p>Teléfono</p>
          <br />
          <input className="colorBuscadores" ref={phone} id="phone" type="phone" />
          <br />
          <br />
          <Button id="submitBtn" text="Guardar" callback={() => console.log('callback')} />
        </form>
      </div>
    </>
  )
}

export default NewStore
