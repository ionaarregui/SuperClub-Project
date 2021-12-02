import React, { useState } from 'react'
import { useLocation } from 'react-router'
import './App.css'
import MainArea from './Components/MainArea/MainArea'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [value, setValue] = useState(false)

  const location = useLocation()

  const [optionActive, setOptionActive] = useState(location.pathname)

  return (
      <div className="App">
        <Sidebar showMenu={value} optionActive={optionActive} setOptionActive={setOptionActive} />
        <MainArea handlerShowMenu={setValue} showMenu={value} setOptionActive={setOptionActive}/>
      </div>

  )
}

export default App
