import { FaCartPlus } from 'react-icons/fa'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" style={{textDecoration: 'none'}} className='cart-widget'>
            <FaCartPlus />
            <span>&nbsp; Items: {totalCantidad()}</span>
        </Link>
    )
}


