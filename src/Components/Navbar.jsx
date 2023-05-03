import React from "react";
import { Link, NavLink}   from 'react-router-dom';

import '../Style/Navbar.css'
import logo from "../Assets/Images/logo.png"


function Navbar() 
{
    //Affichage les elements du menu
    return (
        
        <div className="DivNav">
            <figure>
                <Link to="/">
                    <img src={logo} alt="Logo du site" />
                </Link>
            </figure>

            <nav className="navbar">
                <ul>
                    <li className="lien-accueil"><NavLink to="/">Accueil</NavLink></li>
                    <li className="lien-about"><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;