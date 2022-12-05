import './CartWidget.css'
import React from 'react';
import { Link } from "react-router-dom"
import cartImg from '../../assets/pngwing.com.png'


const CartWidget = () => {
    return (
        <div className='menu-navbar__logo'>
            <Link to={"/cart"}><img className='menu-navbar__img' src={cartImg} alt='cart-widget'/></Link>
        </div>
    )
}

export default CartWidget