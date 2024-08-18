

import React from 'react';
import Items from './ItemLogos';
import CartWidget from './CartWidget.jsx';
import "./NavBar.scss";
import instagramLogo from "../../assets/images/instagram.png";
import twitterLogo from '../../assets/images/twitter.png';
import facebookLogo from '../../assets/images/facebook.png';
import { Link } from 'react-router-dom';




const NavBar = () => {


    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="contenedorTitulo">
                        <Link to={"/"}><h1>Pixel Games</h1></Link>

                        <div className="logosNavbar">
                            <Items nombre={instagramLogo} />
                            <Items nombre={twitterLogo} />
                            <Items nombre={facebookLogo} />


                        </div>
                    </div>
                    <div className="barrabusqueda">
                        <ul>
                            <Link to={"/categoria/aventura"} ><li className="inicio">aventura</li></Link>
                            <Link to={"/categoria/accion"} ><li className="inicio">accion</li></Link>
                            <Link to={"/categoria/deportes"} ><li className="inicio">deportes</li></Link>
                        </ul>
                        <label className="barra">
                            <input type="search" placeholder="¿Que tienes ganas de buscar hoy? " />
                            <button type="submit">Buscar</button>
                        </label>
                        <div className='contenedorItems'>
                            <CartWidget />
                        </div>
                    </div>

                </nav>

            </header>


        </div>
    )
}

export default NavBar

