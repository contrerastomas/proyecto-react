

import React from 'react';
import CartWidget from './CartWidget';
import "./NavBar.scss";

import instagramLogo from "../../assets/images/instagram.png";
import twitterLogo from '../../assets/images/twitter.png';
import facebookLogo from '../../assets/images/facebook.png';

const NavBar = () => {


    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="contenedorTitulo">
                        <h1>Pixel Games</h1>
                        <div className="logosNavbar">
                            <CartWidget nombre={instagramLogo} />
                            <CartWidget nombre={twitterLogo} />
                            <CartWidget nombre={facebookLogo} />
                            {/*  
                            <a className="itemLogos" href="#"><img src={instagramLogo} alt="" /></a>
                            <a className="itemLogos" href="#"><img src={twitterLogo} alt="" /></a>
                            <a className="itemLogos" href="#"><img src={facebookLogo} alt="" /></a>
                        */}
                        </div>
                    </div>
                    <div className="barrabusqueda">
                        <ul>
                            <li className="inicio">
                                <a href="./index.html">inicio</a>
                            </li>
                        </ul>
                        <label className="barra">
                            <input type="search" placeholder="¿Que tienes ganas de buscar hoy? " />
                            <button type="submit">Buscar</button>
                        </label>
                    </div>

                </nav>

            </header>


        </div>
    )
}

export default NavBar

