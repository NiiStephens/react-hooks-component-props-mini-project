import React from "react";

//make an About component
//create an aside element
//An image elment passed down as a prop
//image element must have a default value to cater for no prop passed
//p element should be created with the about text passed as a prop

function About ({ image ="https://via.placeholder.com/215" , about}) {
    
    // let aboutText = "The text in the about"
    return(
        <aside>
            <img src = {image} alt = "blog logo"/>
            <p> {about} </p>

        </aside>
    )
}
    

export default About;