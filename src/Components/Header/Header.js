import { ReactComponent as Arrow } from '../../Assets/chevron-right.svg'
import { ReactComponent as Search } from '../../Assets/magnify.svg'
import { useMatch } from 'react-router'
import './Header.css'
import Button from '../Button/Button'
import { useContext, useRef } from 'react'

const Header = ({ handler, searchContext }) => {
  let content
  const sectionMatch = useMatch('/:section')
  const idMatch = useMatch('/:section/:id')
  const searchInput = useRef('')
  let { setSearch } = useContext(searchContext)

  const handleSearch = () => {
    setSearch(searchInput.current.value)
  }

  if (!sectionMatch && !idMatch) {
    content = (
      <>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
          <h2 className="header-title">¡Hola Olivia!</h2>
        </div>
      </>
    )
  } else if (!idMatch) {
    if (sectionMatch.params.section === 'products') {
      content = (
        <>
          <h2 className="header-title">Productos</h2>
          <div className="header-right">
            <form className="header-form" action="" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Buscar productos" ref={searchInput} onKeyUp={handleSearch} />
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
            <form className="header-form" action="" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Buscar tiendas" ref={searchInput} onKeyUp={handleSearch} />
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
