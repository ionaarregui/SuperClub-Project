import { useState } from 'react'
import './Contador.css'

const Contador = () => {
  let [contador, setContador] = useState(1)

  const handleResta = () => {
    contador--
    setContador(contador)
  }
  const handleSuma = () => {
    contador++
    setContador(contador)
  }

  return (
    <div>
      <div className="contador">
        <button type="button" onClick={handleResta} className="operador">
          -
        </button>
        <a className="contador-valor">{contador}</a>
        <button type="button" onClick={handleSuma} className="operador">
          +
        </button>
      </div>
    </div>
  )
}

export default Contador
