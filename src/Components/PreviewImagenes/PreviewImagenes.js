import ImagenCargada from './ImagenCargada'
import './PreviewImagenes.css'

const PreviewImagenes = () => {
  return (
    <div>
      <ImagenCargada url="https://picsum.photos/48/48" />
      <ImagenCargada url="https://picsum.photos/64/64" />
    </div>
  )
}

export default PreviewImagenes
