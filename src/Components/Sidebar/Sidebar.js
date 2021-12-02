import './Sidebar.css'
import profileIcon from '../../Assets/perfil.png'
import santanderLogo from '../../Assets/santanderLogo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkOption from '../LinkOption/LinkOption'

const links = [
  {
    to: '/',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="iconosMenu"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
      </svg>
    ),
    text: 'Inicio',
  },
  {
    to: '/products',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="iconosMenu"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
      </svg>
    ),
    text: 'Productos',
  },
  {
    to: '/stores',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="iconosMenu"
        version="1.1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z" />
      </svg>
    ),
    text: 'Tiendas',
  },
]

const Sidebar = ({ showMenu }) => {
  const [checked, setChecked] = useState(localStorage.getItem('theme') === 'dark' ? true : false)
  let showingMenu = showMenu ? 'abiertoMenu' : ''
  let switchBtn = checked ? '' : 'SwitchOn'

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem('theme', 'dark')
      setChecked(true)
    } else {
      localStorage.setItem('theme', 'light')
      setChecked(false)
    }
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', localStorage.getItem('theme'))
  }, [checked])

  const location = useLocation()

  const [optionActive, setOptionActive] = useState(location.pathname)

  return (
    <nav className={'navbar ' + showingMenu}>
      <div>
        <div className="logoSant">
          <img src={santanderLogo} alt="Logo de Santander" />
        </div>
        <ul className="optionsMenu">
          {links.map((link) => (
            <LinkOption
              key={link.text}
              to={link.to}
              svg={link.svg}
              text={link.text}
              setOptionActive={setOptionActive}
              isActive={optionActive == link.to}
            />
          ))}
        </ul>
      </div>
      <div className="linkProfile colorProfileSidebar">
        <Link to="/profile">
          <img src={profileIcon} alt="Imagen de perfil" />
          Olivia
        </Link>
        <div className="changeMode" onClick={toggleThemeChange}>
          <div id="botonSwitch" className={'botonSwitch boton' + switchBtn}>
            <div id="opcionSwitch" className={'opcionSwitch opcion' + switchBtn}></div>
          </div>
          Cambiar modo
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
