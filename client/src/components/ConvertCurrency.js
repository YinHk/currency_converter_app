import React from "react";


const  ConvertCurrency = function(props){
    
    let element 
    // use conditional rendering method to display this funtion component
      if(Object.keys(props.reponseData).length != 0){
         element = 
         <div>
          <h3>{props.total} {props.currency1} =</h3>
          <h2>{props.amountConvert}    {props.currency2}</h2>
          <h4>1 {props.currency2} = {props.curr1} {props.currency1}</h4>
          <h4>1 {props.currency1} = {props.curr2} {props.currency2}</h4>
         </div>
      
      } else {
          element = null
      }
     return element
 
 
 
    
    
 
}



export default ConvertCurrency