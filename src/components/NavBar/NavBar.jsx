

import React from 'react';
import cartWidget from './cartWidget';
import "./NavBar.scss";

import instagramLogo from "../../assets/instagram.png";

import twitterLogo from '../assets/twitter.png';
import facebookLogo from '../assets/facebook.png';

const NavBar = () => {


    return (
        <div>
            <nav className="navbar">
            <div className="contenedorTitulo">
                <h1>Pixel Games</h1>
                <div className="logosNavbar">
                    <a className="itemLogos" href="#"><img src={facebookLogo} alt=""/></a>
                    <a className="itemLogos" href="#"><img src={instagramLogo} alt=""/></a>
                    <a className="itemLogos" href="#"><img src={twitterLogo} alt=""/></a>

                </div>
            </div>
            <div className="barrabusqueda">
                <ul>
                    <li className="inicio">
                        <a href="./index.html">inicio</a>
                    </li>
                </ul>
                <label className="barra">
                    <input type="search" placeholder="¿Que tienes ganas de buscar hoy? "/>
                    <button type="submit">Buscar</button>
                </label>
            </div>

        </nav>

        </div>
    )
}

export default NavBar

