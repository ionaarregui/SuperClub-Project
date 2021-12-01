import PreviewImagenes from './PreviewImagenes/PreviewImagenes'
import Button from '../Button/Button'

const submitProducto = () => {
  console.log('Cargando producto')
}

const NewProduct = () => {
  return (
    <div className="form-container">
      <form method="POST" action="/products">
        <h3>Información</h3>
        <p>Nombre</p>
        <br />
        <input id="title" name="title" type="text" placeholder="Nombre del producto" required></input>
        <br />
        <p>Valor</p>
        <br />
        <input id="price" name="price" type="number" placeholder="Precio del producto" required></input>
        <br />
        <p>Stock</p>
        <br />
        <input className=" p-contador" id="stock" name="stock" type="number" defaultValue="1"></input>
        <br />
        <p>Descripción</p>
        <br />
        <textarea
          id="description"
          name="description"
          type="textarea"
          defaultValue=""
          placeholder="Ingrese información general del producto"
        ></textarea>
        <br />
        <p>Tienda</p>
        <br />
        <select id="store" name="store" defaultValue="0" type="number">
          <option value="0" disabled>
            -- Seleccione una tienda --
          </option>
          <option value="t1">Tienda 1</option>
          <option value="t2">Tienda 2</option>
          <option value="t3">Tienda 3</option>
        </select>
        <br />
        <h3>Galería de imágenes</h3>
        <p>Nueva imagen</p>
        <br />
        <input id="image" name="image" type="text" placeholder="Ingrese URL de la imagen"></input>
        <br />
        <br />
        <PreviewImagenes />
        <Button text="Guardar" callback={() => submitProducto()} />
      </form>
    </div>
  )
}

export default NewProduct
