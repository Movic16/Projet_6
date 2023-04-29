import React from 'react';
import {Link} from "react-router-dom"

import '../Style/Cards.css';
import Logements from "../Assets/Logements/Logements.json"

//Cette fonction permet de recuperer les photos{cover} dans le fichier Logements.json
const Cards = () => {
    return (
        <div className="Appart-Cards">

            {/*Liste de base de donnees du fichier logement.json*/}
            {Logements.map((Logements) => {
                const {id, cover, title} = Logements;
                console.log("Logements", Logements);
                console.log("id", id);

                //Affichage des logement dans l'accueil
                return(
                    <div className="Pict-logement" key={id}>
                        <Link to={{pathname : "/Appt", search: "?_id="+id}}>
                            <img src={cover} alt={title} />
                            <h2>{title}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )   
}

export default Cards;