import React from "react";
import {Link } from "react-router-dom";
import '../Style/PageError.css';

import Header from "../Layout/Header";
import Navbar from "../Components/Navbar";
import Main from "../Layout/Main";




function PageError() {
    return(
        <div className="Page-Error">
            <Header>
                <Navbar />
            </Header>

            <Main>
                <div className="Error">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/"><span>Retourner sur la page d'accueil</span></Link>
                </div>
            </Main>
        </div>
    )
}

export default PageError;