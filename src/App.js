import { useState } from 'react'
import './App.css'
import MainArea from './Components/MainArea/MainArea'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const handlerShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className="App">
      <Sidebar showMenu={showMenu} />
      <MainArea handler={handlerShowMenu} />
    </div>
  )
}

export default App
