import React from "react";

function Header(props) 
{
    console.log("props", props);
    const children = props.children;

    return <header>{children}</header>
}

export default Header;