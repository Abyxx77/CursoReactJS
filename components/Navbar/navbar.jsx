import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import { ShoppingCart } from 'phosphor-react';

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to="/" className="link-home"> Abby's Cabinet </Link>
                <Link to="/products"> Productos </Link>
                <Link to="/cart" className="link-cart">
                    <ShoppingCart size={30} /> 
                </Link>
            </div> 
            
            </div>

    );
};
