import { ReactComponent as Arrow } from '../../Assets/chevron-right.svg'
import { ReactComponent as Search } from '../../Assets/magnify.svg'
import { useMatch } from 'react-router'
import './Header.css'
import Button from '../Button/Button'

const Header = () => {
  let content
  const sectionMatch = useMatch('/:section')
  const idMatch = useMatch('/:section/:id')

  if (!sectionMatch && !idMatch) {
    content = <h2 className="header-title">¡Hola Olivia!</h2>
  } else if (!idMatch) {
    if (sectionMatch.params.section === 'products') {
      content = (
        <>
          <h2 className="header-title">Productos</h2>
          <div className="header-right">
            <form className="header-form" action="">
              <input type="text" placeholder="Buscar productos" />
              <button>
                <Search fill="#aaa" stroke="#aaa" width="20px" />
              </button>
            </form>
            <Button text="Agregar producto" />
          </div>
        </>
      )
    } else if (sectionMatch.params.section === 'stores') {
      content = (
        <>
          <h2 className="header-title">Tiendas</h2>
          <div className="header-right">
            <form className="header-form" action="">
              <input type="text" placeholder="Buscar tiendas" />
              <button>
                <Search fill="#aaa" stroke="#aaa" width="20px" />
              </button>
            </form>
            <Button text="Agregar tienda" />
          </div>
        </>
      )
    }
  } else if (!sectionMatch) {
    if (idMatch.params.section === 'products') {
      content = (
        <>
          <h2 className="header-title">
            Productos <Arrow fill="white" stroke="white" /> #{idMatch.params.id}
          </h2>
          <Button text="Eliminar" />
        </>
      )
    } else if (idMatch.params.section === 'stores') {
      content = (
        <h2 className="header-title">
          Tiendas <Arrow fill="white" stroke="white" /> #{idMatch.params.id}
        </h2>
      )
    }
  }

  return <header>{content}</header>
}

export default Header
