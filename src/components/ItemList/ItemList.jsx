import { ItemCard } from "../ItemCard/ItemCard"



export const ItemList = ({ items }) => {

    return (
        <div className="row">
            {
                items.map((prod) => <ItemCard item={prod} key={prod.id} />)
            }
        </div >
    )
}

//<div className="container d-flex justify-content-center align-items-center h-100"></div>