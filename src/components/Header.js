import React from "react";

//Create the header function 
//The header function is suppose have an h1 element.
// The name of the blog must be passed as a prop in the h1 element

function Header ( {name} ) {
    return(
        <header>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;