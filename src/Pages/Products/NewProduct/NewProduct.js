import { useRef, useState, useEffect } from 'react'
import PreviewImagenes from '../../../Components/PreviewImagenes/PreviewImagenes'
import { postProduct, getProduct } from '../../../Utils/ProductUtils'
import Button from '../../../Components/Button/Button'
import { getStoresList } from '../../../Utils/StoreUtils'
import './NewProduct.css'

const NewProduct = () => {
  const [product, setProduct] = useState([])
  const [stores, setStores] = useState([])
  const [store, setStore] = useState([])
  const [gallery, setGallery] = useState([])
  let [contador, setContador] = useState(1)

  let title = useRef('')
  let category = useRef('')
  let price = useRef(0)
  let description = useRef('')
  let image = useRef('')
  let tienda = useRef('')
  let galeria = useRef('')
  let stock = useRef('')

  useEffect(async () => {
    let tiendas = await getStoresList()
    setStores(tiendas)
  }, [])

  const addGalleryItem = (e) => {
    e.preventDefault()
    if (galeria.current.value !== '' && e.key == 'Enter') {
      setGallery([...gallery, galeria.current.value])
      galeria.current.value = ''
    }
  }

  const deleteGalleryItem = (item) => {
    setGallery(gallery.filter((e) => e != item))
  }

  const handleResta = () => {
    if (contador > 0) contador--
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

  const prevenirEnvio = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault(e)
    }
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
          <br />
          <h3>Galería de imágenes</h3>
          <div className="input-group">
            <p>Nueva imagen</p>
            <br />
            <input
              className="colorBuscadores"
              type="text"
              ref={galeria}
              id="image"
              placeholder="Url de imagen..."
              onKeyUp={addGalleryItem}
              onKeyPress={prevenirEnvio}
            />
            {product &&
              gallery &&
              gallery.map((item, i) => {
                return (
                  <div className="product-galleryItem" key={i}>
                    <div className="product-galleryItem-img">
                      <div className="product-img">
                        <img src={item} alt={item} />
                      </div>
                      <p>{item}</p>
                    </div>
                    <Button type="button" text="Quitar" callback={() => deleteGalleryItem(item)} />
                  </div>
                )
              })}
          </div>
          <br />
          <Button id="submitBtn" text="Guardar" callback={() => console.log('callback')} />
        </form>
      </div>
    </>
  )
}

export default NewProduct
