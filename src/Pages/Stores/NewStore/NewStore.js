import { useRef } from 'react'
import { postStore } from '../../../Utils/StoreUtils'
import Button from '../../../Components/Button/Button'
import './NewStore.css'

const NewStore = () => {
  let name = useRef('')
  let logo = useRef('')

  const submitStore = (e) => {
    e.preventDefault()
    let store = {
      name: name.current.value,
      logo: logo.current.value,
    }
    postStore(store).catch((err) => console.error('Error santanderístico al cargar la tienda'))
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
          <br />
          <Button id="submitBtn" text="Guardar" callback={() => console.log('callback')} />
        </form>
      </div>
    </>
  )
}

export default NewStore
