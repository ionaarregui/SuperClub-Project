import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getProduct } from '../../../Utils/ProductUtils'
import './ProductView.css'

const ProductView = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProduct(id)
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="contenedor">
      <div className="product">
        <div className="product-img">
          <img src={product.image} alt={product.title} />
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
              <img src="https://http2.mlstatic.com/D_NQ_NP_917772-MLA46164931649_052021-O.webp" alt="" />
              <span>Nombre tienda</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-data">
        <h3>Información</h3>
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" value={product.title} />
        </div>
        <div className="input-group">
          <label htmlFor="precio">Precio</label>
          <input type="number" name="precio" id="precio" value={product.price} />
        </div>
        <div className="input-group">
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" id="stock" value={product.stock} />
        </div>
        <div className="input-group">
          <label htmlFor="descripcion">Descripcion</label>
          <textarea name="descripcion" id="descripcion" cols="30" rows="10" value={product.description}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="tienda">Tienda</label>
          <select name="tienda" id="tineda"></select>
        </div>
        <h3>Información</h3>
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" placeholder="Url de imagen..." />
          <p>Imagenes actuales</p>

          {/* {product &&
            product.gallery.map((item, i) => {
              return (
                <div className="product-galleryItem" key={i}>
                  <div className="product-galleryItem-img">
                    <div className="product-img">
                      <img src={item} alt={item} />
                    </div>
                    <p>{item}</p>
                  </div>
                  <button>Quitar</button>
                </div>
              )
            })} */}
        </div>
        <div className="actions">
          <button>Cancelar</button>
          <button>Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default ProductView
