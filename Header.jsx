import React from "react";
import Image from "./Image/download1.jpg";


const Header = () =>{
return(
    <>
        <div className="header">
            <img src={Image} alt="download1" width="70" height="70" /> 
            <h1>Damini Keep</h1>
        </div>
    </>
);
};
export default Header;