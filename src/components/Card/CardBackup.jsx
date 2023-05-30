
export const Card = ( {producto} ) => {

    return (
        <div className="container my-5">
            <h2>{producto}</h2>
            <hr/>
            <p>{producto} Industrial con motor con doble ruleman y protector térmico</p>
        </div>
    )
}

export default Card;