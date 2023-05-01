import React, { useState } from 'react';
import '../Style/Collapse.css'
import chevronUp from "../Assets/Images/ChevronUp.png"
import chevronDown from "../Assets/Images/ChevronDown.png"

function Collapse({title, content}) 
{
    //Definir l'etat par defaut du collapse
    const [contentVisible, setcontentVisible] = useState(false);
    
    //Verifie l'etat du collapse apres le clic
    const affContent = () =>{
        setcontentVisible(!contentVisible); //Inverse l'etat du collapse
    }

    //Définir les classes si c'est visible ou caché, pareil pour les chevrons
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse";
    const collapseChevron = (contentVisible ? chevronUp : chevronDown);

    return (
        <div className='Collapse'>
            {/**affiche le titre et le chevron */}
            <div className='Div-collapse-titre' onClick ={affContent}>
                <span>{title}</span>
                <div className='chevronValue'>
                    <img src={collapseChevron} alt="Chevron des collapses" />
                </div>
            </div>

            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse