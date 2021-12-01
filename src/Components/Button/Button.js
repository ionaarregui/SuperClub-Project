import './Button.css'

const Button = ({ type = 'submit', text, callback }) => {
  return (
    <div>
      <button type={type} className="btn" onClick={callback}>
        {text}
      </button>
    </div>
  )
}

export default Button
