import PreviewImagenes from "./PreviewImagenes/PreviewImagenes"
import Button from "../Button/Button"

const submitProducto = () => {
    console.log("Cargando producto")
}

const NewProduct = () => {
    return (
        <div className="new-product-form-container">
            <form method="POST" action="/products">
                <h3 className="new-product-form-title">Información</h3>
                <p className="product-label">Nombre</p><br/>
                <input className="product-input" id="title" name="title" type="text" placeholder="Nombre del producto" required></input><br/>
                <p className="product-label">Valor</p><br/>
                <input className="product-input p-inputtext" id="price" name ="price" type="number" placeholder="Precio del producto" required></input><br/>
                <p className="product-label">Stock</p><br/>
                <input className="product-input p-contador" id="stock" name ="stock" type="number" defaultValue="1"></input><br/>
                <p className="product-label">Descripción</p><br/>
                <textarea className="product-input p-textarea" id="description" name ="description" type="textarea" defaultValue="" placeholder="Ingrese información general del producto"></textarea><br/>
                <p className="product-label">Tienda</p><br/>
                <select className="product-input p-inputtext" id="store" name ="store" defaultValue="0" type="number">
                    <option value="0" disabled>-- Seleccione una tienda --</option>
                    <option value="t1">Tienda 1</option>
                    <option value="t2">Tienda 2</option>
                    <option value="t3">Tienda 3</option>
                </select><br/>
                <h3 className="new-product-form-title">Galería de imágenes</h3>
                <p className="product-label">Nueva imagen</p><br/>
                <input className="product-input p-inputtext" id="image" name ="image" type="text" placeholder="Ingrese URL de la imagen"></input><br/><br/>
                <PreviewImagenes />
                <Button text="Guardar" callback={ () => submitProducto() }/>
            </form>
        </div>
    )
}

export default NewProduct
