import React, { useState } from 'react';

import '../Style/Carrousel.css'

import chevronGauche from "../Assets/Images/ChevronGauche.png";
import chevronDroit from "../Assets/Images/ChevronDroit.png";

//Reçois un tableau avec les URL des image
function Carousel({pictures, titre})
{
    console.log("pictures", pictures);
    console.log("titre", titre);

    const [index, setIndex] = useState(0); //Variable de compteur
    const totalPictures = pictures.length-1; //nombre d'image total
    console.log("totalPictures", totalPictures);

    if(index < 0) setIndex(totalPictures) //si image inferieur a zéro, definir le nombre max
    if(index > totalPictures) setIndex(0) //si image superieur est au max de l'image, alors mise a zéro

    return(
        <div className='Carrousel'>

            {/* Affichage la premiere image*/}
            <figure>
                <img src={pictures[index]} key={"pict"+index} alt={titre} />
            </figure>

            {/* si plus d'une image, alors ce code sera exécuté */}
            {totalPictures > 0 && (
                <div className='buttonChevron'>{/*les bouton pour les chevrons droiy et gauche, servent à navigue tout les images */}
                    <button className='buttonChevronGauche' onClick={() => setIndex(index - 1)}>{/*index*/}
                        <img src={chevronGauche} className='chevronGauche' alt="Fleche de gauche pour navigue sur les photos" />
                    </button>

                    <button className='buttonchevronDroit' onClick={() => setIndex(index +1)}>{/*index*/}
                        <img src={chevronDroit} className='chevronDroit' alt="Fleche de droit pour navigue sur les photos" />
                    </button>
                </div>
            )}

            {totalPictures > 0 && (
                //Compteur d'image
                <div className='Div-Cpt'>
                    <p className='compteurImg'>{index+1}/{totalPictures+1}</p>
                    {console.log("index+1", index+1)}
                    {console.log("totalPictures+1", totalPictures+1)}
                </div>
            )}
        </div>
    )
}

export default Carousel