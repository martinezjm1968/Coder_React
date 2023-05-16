import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length>0 ? 'cart-widget-active' : ''}`}>
            <FaCartPlus />
            <span>&nbsp; Items: {totalCantidad()}</span>
        </Link>
    )
}


