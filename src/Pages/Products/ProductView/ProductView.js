import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import Button from '../../../Components/Button/Button'
import { getProduct, putProduct } from '../../../Utils/ProductUtils'
import { getStoresList } from '../../../Utils/StoreUtils'
import './ProductView.css'
import notImage from '../../../Assets/image-not-found.png'

const ProductView = () => {
  const [product, setProduct] = useState([])
  const [stores, setStores] = useState([])
  const [store, setStore] = useState([])
  const [gallery, setGallery] = useState([])

  const nombre = useRef('')
  const categoria = useRef('')
  const stock = useRef('')
  const precio = useRef('')
  const descripcion = useRef('')
  const tienda = useRef('')
  const imagen = useRef('')
  const galeria = useRef('')

  const { id } = useParams()
  useEffect(async () => {
    let producto = await getProduct(id)
    let tiendas = await getStoresList()
    let storeProduct = setTimeout(
      tiendas.find((t) => t._id === producto.store),
      1000
    )
    setProduct(producto)
    setStore(storeProduct)
    setStores(tiendas)
    setGallery(producto.gallery)
    nombre.current.value = producto.title || ''
    precio.current.value = producto.price || 0
    stock.current.value = producto.stock || 0
    descripcion.current.value = producto.description || ''
    tienda.current.value = producto.store || ''
    categoria.current.value = producto.category || ''
    imagen.current.value = producto.image || ''
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

  const sendForm = (e) => {
    e.preventDefault()
    let productoEdit = {
      _id: product._id,
      title: nombre.current.value,
      price: precio.current.value,
      stock: stock.current.value,
      description: descripcion.current.value,
      image: imagen.current.value,
      category: categoria.current.value,
      store: tienda.current.value,
      gallery: gallery,
      mostWanted: false,
    }
    putProduct(product._id, productoEdit).catch((err) => console.error('Error santanderístico al cargar el producto'))
  }

  const prevenirEnvio = (e) => {
    if (e.key == 'Enter') {
      e.preventDefault(e)
    }
  }

  return (
    <>
      <div className="product colorPrincipal">
        <div className="product-img">
          <img src={product.image ? product.image : notImage} alt={product.title} />
        </div>
        <div>
          <h3>{product.title}</h3>
          <div className="product-info">
            <p className="puntos">
              {product.price}
              <span>Puntos superclub</span>
            </p>
            <p className="puntos">
              {product.stock}
              <span>Stock superclub</span>
            </p>
            <div className="tienda">
              {product.store && store ? (
                <>
                  <img src={store.logo ? store.logo : notImage} alt="" />
                  <span>{store.name}</span>
                </>
              ) : (
                <>
                  <img src={notImage} alt="not image" />
                  <span>El producto no tiene tienda</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="form-container colorPrincipal">
        <h3>Información</h3>
        <form onSubmit={sendForm}>
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <br />
            <input className="colorBuscadores" required type="text" ref={nombre} id="nombre" />
          </div>
          <div className="input-group">
            <label htmlFor="categoria">Categoria</label>
            <br />
            <input className="colorBuscadores" required type="text" ref={categoria} id="categoria" />
          </div>
          <div className="input-group">
            <label htmlFor="precio">Precio</label>
            <br />
            <input className="colorBuscadores" required type="number" ref={precio} id="precio" />
          </div>
          <div className="input-group">
            <label htmlFor="stock">Stock</label>
            <br />
            <input className="colorBuscadores" type="number" ref={stock} id="stock" />
          </div>
          <div className="input-group">
            <label htmlFor="descripcion">Descripcion</label>
            <br />
            <textarea className="colorBuscadores" ref={descripcion} id="descripcion" cols="30" rows="10"></textarea>
          </div>
          <div className="input-group">
            <label htmlFor="tienda">Tienda</label>
            <br />

            <select className="colorBuscadores" ref={tienda} id="tienda">
              <option value="0" disabled>
                -- Seleccione una tienda --
              </option>
              {stores &&
                stores.map((t) => (
                  <option value={t._id} key={t._id}>
                    {t.name}
                  </option>
                ))}
            </select>
          </div>

          <h3>Galería de imagenes</h3>
          <div className="input-group">
            <label htmlFor="image">Imagen principal</label>
            <br />
            <input className="colorBuscadores" type="text" ref={imagen} id="image" placeholder="Url de imagen..." />
          </div>
          <div className="input-group">
            <label htmlFor="image">Nueva imagen</label>
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
                  <div className="product-galleryItem colorItems" key={i}>
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
          <div className="actions">
            <Button type="button" text="Cancelar" callback={() => {}} />
            <Button text="Guardar" callback={() => {}} />
          </div>
        </form>
      </div>
    </>
  )
}

export default ProductView
