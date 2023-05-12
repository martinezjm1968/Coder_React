

export const Contador = ({cantidad, setCantidad, stock, agregar}) => {


    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    

    return (
        <div>
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span style={{ color: 'black' }} className="mx-2">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <br/>
            <br/>
            
            <button onClick={agregar} type="button" className="btn btn-danger"> Agregar al Carrito </button>
            <br />
            
        </div>
    )
}
// <button onClick={agregar} type="button" className="btn btn-info btn-lg btn3d"><span className="glyphicon glyphicon-question-sign"></span> Agregar al Carrito </button>


