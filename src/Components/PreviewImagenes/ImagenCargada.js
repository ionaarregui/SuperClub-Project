import Button from '../Button/Button'

const ImagenCargada = ({ url }) => {
  const quitarImagen = () => {
    console.log('Quitando imagen')
  }

  return (
    <div className="div-img-cargada colorItems">
      <img className="div-img-picture" src={url} alt="Producto cargado a la tienda" />
      <span className="div-img-url product-label">{url}</span>
      <div className="div-img-quitar">
        <Button type="button" text="Quitar" callback={() => quitarImagen()} />
      </div>
    </div>
  )
}

export default ImagenCargada
