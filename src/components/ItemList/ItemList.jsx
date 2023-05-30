import { ItemCard } from "../ItemCard/ItemCard"

import "../ItemListContainer/Items.css";

export const ItemList = ({ items }) => {

    return (
        <div className="grid-list">
            {
                items.map((prod) => <ItemCard item={prod} key={prod.id} />)
            }
        </div >
    )
}
