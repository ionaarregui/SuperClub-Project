import { useMatch } from 'react-router'
import './Header.css'
import Button from '../Button/Button'
import { useContext, useRef } from 'react'
import MenuButton from '../MenuButton/MenuButton'
import SearchButton from '../SearchButton/SearchButton'
import Arrow from '../Arrow/Arrow'

const Header = ({ handler, searchContext }) => {
  let title
  let contentRight
  const sectionMatch = useMatch('/:section')
  const idMatch = useMatch('/:section/:id')
  const searchInput = useRef('')
  let { setSearch } = useContext(searchContext)

  const handleSearch = () => {
    setSearch(searchInput.current.value)
  }

  if (!sectionMatch && !idMatch) {
    title = '¡Hola Olivia!'
  } else if (!idMatch) {
    if (sectionMatch.params.section === 'products') {
      title = 'Productos'
      contentRight = (
        <>
          <form className="header-form" action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Buscar productos" ref={searchInput} onKeyUp={handleSearch} />
            <SearchButton />
          </form>
          <Button text="Agregar producto" />
        </>
      )
    } else if (sectionMatch.params.section === 'stores') {
      title = 'Tiendas'
      contentRight = (
        <>
          <form className="header-form" action="" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Buscar tiendas" ref={searchInput} onKeyUp={handleSearch} />
            <SearchButton />
          </form>
          <Button text="Agregar tienda" />
        </>
      )
    }
  } else if (!sectionMatch) {
    if (idMatch.params.section === 'products') {
      title = (
        <>
          Productos <Arrow /> #{idMatch.params.id}
        </>
      )
      contentRight = (
        <>
          <Button text="Eliminar" />
        </>
      )
    } else if (idMatch.params.section === 'stores') {
      title = (
        <>
          Tiendas <Arrow /> #{idMatch.params.id}
        </>
      )
    }
  }

  let content = (
    <>
      <div class="header-left">
        <MenuButton />
        <h2 className="header-title">{title}</h2>
      </div>
      <div class="header-right">{contentRight}</div>
    </>
  )

  return <header>{content}</header>
}

export default Header
