import Content from '../Content/Content'
import Header from '../Header/Header'
import './MainArea.css'

export default function MainArea({ showMenu }) {
  return (
    <main className="mainarea">
      <Header showMenu={showMenu} />
      <Content />
    </main>
  )
}
