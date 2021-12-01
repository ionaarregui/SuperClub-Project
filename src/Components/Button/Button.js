import './Button.css'

// El texto del botón se carga dentro de la etiqueta "text"
// Para incorporar la función a realizar se puede usar una arrow
// mediante la etiqueta callback, poniendo callback={()=>...jsx...}
// El type "submit" vendrá por defecto como en HTML,
// si no se desea que submitee, sumar la etiqueta type="button"
// EJEMPLO DE SUBMIT: <Button text="Guardar" callback={() => console.log("Submit")} />
// EJEMPLO : <Button type="button" text="Menu" callback={() => abrirMenu()} />
const Button = ({
  callback = () => console.log('Callback del <Button/> vacío (agregar con <Button callback={()=>etc}/>)'),
  text,
  type = 'submit',
}) => {
  return (
    <div>
      <button className="btn colorBotonesUsuario" type={type} onClick={callback}>
        {text}
      </button>
    </div>
  )
}

export default Button
