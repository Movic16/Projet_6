import React from "react";

function Header(Hprops) 
{
    console.log("Hprops", Hprops);
    const Hchildren = Hprops.children;

    return <header>{Hchildren}</header>
}

export default Header;