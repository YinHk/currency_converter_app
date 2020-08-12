import React, { useEffect ,useRef } from "react"
import Data from "../../src/Data.js"

import Menu from "./Menu"

//creat a custom hook for getting previous state 
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function Dropdown (props){

  const currencyMenu = Data.map(item => <Menu key={item.id} menu={item} />)
  

  
    return(
     
        currencyMenu
    ) 

}

export default Dropdown



//const [value, setValue] = useState(null)
  //const prevValue = usePrevious(value)
  
 //handle changes of selection, update the value of selection and url of flag 
 /*const handleChange = e => {
   var index =e.target.selectedIndex
   var optionElement = e.target.childNodes[index]
   var option = optionElement.getAttribute('id')
   setValue(e.target.value)
   url = "https://www.countryflags.io/"+ option +"/shiny/64.png"
   //console.log(e.target.value)
  };*/

 //validate input amount before submission to server
 //const ValidateSelect = (e)=>{
   
 // e.preventDefault();
  //console.log('HEllo')
 // console.log(value)
  // fix problem here value cannot pass inside this 
  /*if(value==null){
     alert('Please choose any currency')
  }*/
    
//}


