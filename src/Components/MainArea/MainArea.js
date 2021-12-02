import { createContext, useState } from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import './MainArea.css'

export default function MainArea({ handlerShowMenu, showMenu, setOptionActive}) {
  const [search, setSearch] = useState('')
  const searchContext = createContext({ search, setSearch })

  const ocultarMenu = (e) => {
    if (window.screen.width < 1024 && showMenu) {
      e.preventDefault()
      handlerShowMenu(false)
    }
  }

  return (
    <main className="mainarea" onClick={ocultarMenu}>
      <Header handlerShowMenu={handlerShowMenu} searchContext={searchContext} />
      <Content searchContext={searchContext} setOptionActive={setOptionActive}/>
    </main>
  )
}
