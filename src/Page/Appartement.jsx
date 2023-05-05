import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import '../Style/Appartements.css'
import Logements from "../Assets/Logements/Logements.json"

import Header from "../Layout/Header";
import Navbar from "../Components/Navbar";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";

import PageError from "./PageError";
import Carrousel from "../Components/Carrousel"
import Collapse from "../Components/Collapse";

const ArrayStars =[1, 2, 3, 4, 5]

function Appartements()
{
    //recuperer l'id de l'url
    const [searchPrams] = useSearchParams();
    const [idLogement, setIdLogement] = useState(searchPrams.get('_id'));
    console.log("searchPrams", searchPrams);
    console.log("idLogement", idLogement);
    console.log("setIdLogement", setIdLogement);

    //Rechercher l'id dans le fichier de logement
    const IdLogemnt_OK = Logements.find(element => element.id === idLogement);
    console.log("IdLogemnt_OK", IdLogemnt_OK);

    //Si l'url est modifie manuellement, redirection la page error
    if(!IdLogemnt_OK) return(<PageError />)

    //recuperer la liste des equipements
    const equipements = IdLogemnt_OK.equipments.map((element, index) =>(
        <li className="Descrip-equipement" key={'equipement'+index.toString()}>{element}</li>
    ));

    //recuperer les tagas
    const recupTags = IdLogemnt_OK.tags.map((element, index) =>(
        <p className="Tags-Log" key={'Tags-Log-'+index}>{element}</p>
    ));

    return(
        <div className="App">
            <Header>
                <Navbar />
            </Header>

            <Main>
                <div className="Appt-Logement">
                    {/**Reenvoie l'image a la fonction Carousel */}
                    <Carrousel pictures={IdLogemnt_OK.pictures} titre={IdLogemnt_OK.title}/>

                    {/*Affichage des titres, ville, tag et profil*/}
                    <div className="Descrip-Logement">
                        <div className="Title-Tag">
                            <div className="Log-Title">
                                <h1>{IdLogemnt_OK.title}</h1>
                                <h2>{IdLogemnt_OK.location}</h2>
                            </div>

                            {/**Affichage des tags */}
                            <div className="Div-Tags">
                                {recupTags}
                            </div>
                        </div>

                        <div>
                            {/**Affichage des profils */}
                            <div className="Div-Profil">
                                <div className="Nom-Profil">
                                    <p>{IdLogemnt_OK.host.name}</p>
                                    <div className="Badge">
                                        <img src={IdLogemnt_OK.host.picture} alt={'Profil de '+IdLogemnt_OK.host.name} />
                                    </div>
                                </div>

                                <div className="Stars">
                                    {
                                        ArrayStars.map(element => {
                                            const nbreEtoiles = parseInt(IdLogemnt_OK.rating);
                                            console.log("nbreEtoiles", nbreEtoiles);

                                            return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'etoilColor' : 'etoilNoColor'}>★</span>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapseApp">
                        <Collapse title="Description"  content={IdLogemnt_OK.description} />
                        <Collapse title="Equipements"  content={equipements} />
                    </div>
                </div>
            </Main>
            
            <Footer />
        </div>
    )
    
}

export default Appartements;