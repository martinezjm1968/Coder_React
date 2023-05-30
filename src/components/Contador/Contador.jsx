import "./Contador.css"

export const Contador = ({ cantidad, setCantidad, stock, agregar }) => {

    const handleChange = (e) => {
        let value = parseInt(e.target.value);
        if (isNaN(value)) {
            value = 1;
        } else {
            if (value>stock) {
                value = stock;
            } else {
                if (value <= 0){
                    value = 1;
                }
            }
        }
        setCantidad(value);
    };

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button
                onClick={handleRestar}
                className={`btn mx-1 ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary"}`}

                disabled={cantidad === 1}
            > - </button>

            <input 
                className = "input_checkout"
                type="number" 
                min={1}
                max={stock}
                value={cantidad}
                onChange={handleChange}
                
            />
            {/*<span style={{ color: 'black' }} className="mx-2">{cantidad}</span>*/}

            <button
                onClick={handleSumar}
                className={`btn mx-1 ${cantidad === stock ? "btn-outline-danger" : "btn-outline-primary"}`}
                disabled={cantidad === stock}
            > + </button>

            <br />
            <br />

            <button
                onClick={agregar}
                type="button"
                className="btn btn-danger">
                Agregar al Carrito
            </button>
            <br />

        </div>
    )
}



