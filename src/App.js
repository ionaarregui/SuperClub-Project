import React, { useState } from 'react'
import './App.css'
import MainArea from './Components/MainArea/MainArea'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [value, setValue] = useState(false)

  return (
      <div className="App">
        <Sidebar showMenu={value} />
        <MainArea handlerShowMenu={setValue} showMenu={value} />
      </div>

  )
}

export default App
