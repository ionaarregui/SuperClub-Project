import { ReactComponent as Arrow } from '../../Assets/chevron-right.svg'
import { ReactComponent as Search } from '../../Assets/magnify.svg'
import { useMatch } from 'react-router'
import './Header.css'

const Header = () => {
  let content
  const sectionMatch = useMatch('/:section')
  const idMatch = useMatch('/:section/:id')

  if (!sectionMatch && !idMatch) {
    content = <div className="header-title">¡Hola Olivia!</div>
  } else if (!idMatch) {
    if (sectionMatch.params.section === 'products') {
      content = (
        <>
          <div className="header-title">Productos</div>
          <div className="header-right">
            <div className="searchBar">
              <input type="text" placeholder="Buscar productos" />
              <button>
                <Search fill="black" stroke="black" />
              </button>
            </div>
            <button>Agregar producto</button>
          </div>
        </>
      )
    } else if (sectionMatch.params.section === 'stores') {
      content = (
        <>
          <div className="header-title">Tiendas</div>
          <div className="header-right">
            <div className="searchBar">
              <input type="text" placeholder="Buscar tiendas" />
              <button>
                <Search fill="black" stroke="black" />
              </button>
            </div>
            <button>Agregar tienda</button>
          </div>
        </>
      )
    }
  } else if (!sectionMatch) {
    if (idMatch.params.section === 'products') {
      content = (
        <>
          <div className="header-title">
            Productos <Arrow fill="white" stroke="white" /> #{idMatch.params.id}
          </div>
          <button>Eliminar</button>
        </>
      )
    } else if (idMatch.params.section === 'stores') {
      content = (
        <div className="header-title">
          Tiendas <Arrow fill="white" stroke="white" /> #{idMatch.params.id}
        </div>
      )
    }
  }

  return <header>{content}</header>
}

export default Header
