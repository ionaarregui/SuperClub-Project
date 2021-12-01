import Content from '../Content/Content'
import Header from '../Header/Header'
import './MainArea.css'

export default function MainArea({ handler }) {
  return (
    <main className="mainarea">
      <Header handler={handler} />
      <Content />
    </main>
  )
}
