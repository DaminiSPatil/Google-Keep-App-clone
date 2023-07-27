import React from "react";


const Footer = () =>{
    const year=new Date().getFullYear();
return(
    <>
      <footer>
      <p  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }} >copyright © {year}</p>
      </footer>  
    </>
);
};
export default Footer;