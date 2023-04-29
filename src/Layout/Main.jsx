import React from "react";
import '../Style/Main.css';

function Main(Mprops) 
{
    console.log("Mprops", Mprops);
    const Mchildren = Mprops.children;

    return <main className="P-Main">{Mchildren}</main>
}

export default Main;