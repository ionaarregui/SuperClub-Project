import { Link } from 'react-router-dom'

const LinkOption = ({ to, svg, text, isActive, setOptionActive}) => {
  return (
    <Link to={to} className="optionsLink" onClick={() => setOptionActive(to)}>
      <li className={'options ' + (isActive && 'optionActive')}>
        {svg}
        {text}
      </li>
    </Link>
  )
}

export default LinkOption
