import "./Button.css";

const Button = ({ text, callback }) => {
    return (
        <div>
            <button className="btn" onClick={ callback }>{ text }</button>
        </div>
    )
}

export default Button
