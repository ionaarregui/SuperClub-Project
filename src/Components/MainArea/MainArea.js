import Content from '../Content/Content'
import Header from '../Header/Header'
import './MainArea.css'

export default function MainArea({ handlerShowMenu, showMenu }) {

  const ocultarMenu = (e) => {
    if (window.screen.width < 1024 && showMenu) {
      e.preventDefault()
      handlerShowMenu(false)

    }
  }

  return (
    <main className="mainarea" onClick={ocultarMenu}>
      <Header handlerShowMenu={handlerShowMenu} />
      <Content />
    </main>
  )
}
