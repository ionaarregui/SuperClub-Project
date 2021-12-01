import elsa from '../../Assets/elsa.gif'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="error404">
            <img className="elsaCorriendo" src={elsa} alt="Elsa corriendo"/>
            <p className="colorPrincipal">¡Ooops!</p>
            <p className="colorPrincipal">Elsa no encontró tu página</p>
        </div>
    )
}

export default NotFound
