import { useRef, useState, useEffect } from 'react'
import PreviewImagenes from '../../../Components/PreviewImagenes/PreviewImagenes'
import { postProduct } from '../../../Utils/ProductUtils'
import Button from '../../../Components/Button/Button'
import { getStoresList } from '../../../Utils/StoreUtils'
import './NewProduct.css'

const NewProduct = () => {
  let title = useRef('')
  let category = useRef('')
  let price = useRef(0)
  let description = useRef('')
  let store = useRef('')
  let image = useRef('')
  let tienda = useRef('')

  let [contador, setContador] = useState(1)
  let [stores, setStores] = useState([])

  useEffect(async () => {
    let tiendas = await getStoresList()
    setStores(tiendas)
  }, [])

  const handleResta = () => {
    contador--
    setContador(contador)
  }
  const handleSuma = () => {
    contador++
    setContador(contador)
  }

  const submitProducto = (e) => {
    e.preventDefault()
    let product = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
      image: image.current.value,
      stock: contador,
      category: category.current.value,
      store: '',
      gallery: '',
      mostWanted: false,
    }
    postProduct(product).catch((err) => console.error('Error santanderístico al cargar el producto'))
  }

  return (
    <>
      <div className="form-container colorPrincipal">
        <form method="POST" action="/products" onSubmit={submitProducto}>
          <h3>Información</h3>
          <p>Nombre</p>
          <br />
          <input className="colorBuscadores" ref={title} id="title" name="title" type="text" placeholder="Nombre del producto" required></input>
          <br />
          <p>Categoría</p>
          <br />
          <input
            className="colorBuscadores"
            ref={category}
            id="category"
            name="category"
            type="text"
            placeholder="Categoría del producto"
            required
          ></input>
          <br />
          <p>Valor</p>
          <br />
          <input className="colorBuscadores" ref={price} id="price" name="price" type="number" placeholder="Precio del producto" required></input>
          <br />
          <p>Stock</p>
          <br />
          <div className="contador colorBuscadores">
            <button type="button" onClick={handleResta} className="operador colorBuscadores">
              -
            </button>
            <input className="colorBuscadores" id="stock" value={contador} name="stock" type="number" defaultValue="1" required></input>
            <button type="button" onClick={handleSuma} className="operador colorBuscadores">
              +
            </button>
          </div>
          {/* <input ref={stock} id="stock" name="stock" className="p-contador" type="number" defaultValue="1" required></input> */}
          <br />
          <p>Descripción</p>
          <br />
          <textarea
            className="colorBuscadores"
            ref={description}
            id="description"
            name="description"
            type="textarea"
            defaultValue=""
            placeholder="Ingrese información general del producto"
          ></textarea>
          <br />
          <p>Tienda</p>
          <br />
          <select ref={tienda} className="colorBuscadores" ref={store} id="tienda" name="tienda" defaultValue="0" type="number" required>
            <option value="0" disabled>
              -- Seleccione una tienda --
            </option>
            {stores &&
              stores.map((t) => (
                <option value={t.name} key={t._id}>
                  {t.name}
                </option>
              ))}
          </select>
          {/* <select ref={store} id="store" name="store" defaultValue="0" type="number" required>
            <option key="0" defaultValue="0" disabled>
              -- Seleccione una tienda --
            </option>
            {tiendas.map((tienda) => (
              <option value={tienda.id} key={tienda.id}>
                {tienda.name}
              </option>
            ))}
          </select> */}
          <br />
          <h3>Galería de imágenes</h3>
          <p>Nueva imagen</p>
          <br />
          <input className="colorBuscadores" ref={image} id="image" name="image" type="text" placeholder="Ingrese URL de la imagen"></input>
          <br />
          <br />
          <PreviewImagenes />
          <Button id="submitBtn" text="Guardar" callback={() => console.log('callback')} />
        </form>
      </div>
    </>
  )
}

export default NewProduct
