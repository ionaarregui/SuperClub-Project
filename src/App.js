import React, { useState } from 'react'
import './App.css'
import MainArea from './Components/MainArea/MainArea'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {

  const [value, setValue] = useState(false)

  let showMenu = React.createContext({value, setValue})

  return (
      <div className="App">
        <Sidebar showMenu={showMenu} />
        <MainArea showMenu={showMenu } />
      </div>

  )
}

export default App
