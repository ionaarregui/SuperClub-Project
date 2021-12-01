import { createContext, useState } from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import './MainArea.css'

export default function MainArea({ handler }) {
  const [search, setSearch] = useState('')
  const searchContext = createContext({ search, setSearch })

  return (
    <main className="mainarea">
      <Header handler={handler} searchContext={searchContext} />
      <Content searchContext={searchContext} />
    </main>
  )
}
