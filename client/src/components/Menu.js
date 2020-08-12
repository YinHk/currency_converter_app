import React from "react";


function Menu (props){
     
    
    //const flag = <img src={props.menu.flagURL} alt={props.menu.country} className="flag"  />;
   //// const code = {props.menu.currencyCode};
    //const currency = {props.menu.currencyName};
    //const selection = {flag}+{code} - {currency};

    return(

        <option id={props.menu.countryAbbrev} value={props.menu.currencyCode}>{props.menu.currencyCode} - {props.menu.currencyName}</option>
   
        )
    
   
}


export default Menu