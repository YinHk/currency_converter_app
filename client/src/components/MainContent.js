import React,{useState,useEffect} from "react"
import logo from "../../src/image/arrow.png"
import Dropdown from "./Dropdown"
import ConvertCurrency from "./ConvertCurrency"
import "../style.css"

var url1,url2 = null
function MainContent(){

 //initialize the url of image, set it to null

 const [amount, setAmount] = useState(null)
 const [value1, setValue1] = useState(null)
 const [value2, setValue2] = useState(null)
 const [apiResponse, setApiResponse] = useState({})
 const [bgColor, setBgColor] = useState(null)

 //style button and input
 const logoStyle = {
    width: 45,
    height: 35
  }
 const inputStyle = {
    width: 90,
    height: 33
  }
 const submitStyle = {
    width: 70,
    height: 35
  }

 //handle onChange function, 'e' for event
 const DetectInputValue = e =>{
  setAmount(e.target.value)
 }

 //handle changes of selection, update the value of selection and url of flag.
 const handleChange = e => {
  //console.log(e.target.getAttribute('id'))
  if(e.target.getAttribute('id')=== 'selectForm1'){
   var index1 =e.target.selectedIndex
   var optionElement1 = e.target.childNodes[index1]
   var option1 = optionElement1.getAttribute('id')
   url1 = "https://www.countryflags.io/"+ option1 +"/shiny/64.png"
   setValue1(e.target.value)
   //console.log(url1)
  }
  else  if(e.target.getAttribute('id')=== 'selectForm2'){
   var index2 =e.target.selectedIndex
   var optionElement2 = e.target.childNodes[index2]
   var option2 = optionElement2.getAttribute('id')
   url2 = "https://www.countryflags.io/"+ option2 +"/shiny/64.png"
   setValue2(e.target.value)
   //console.log(url2)
  }
 }

 //validate input amount before submission to server
 const handleSubmit = (e)=>{
   //prevent refreshing the page after form submission
   e.preventDefault();

   //set a boolean for checking amount validation
   var amountValidated = false

   //here is to validate the selects of currency
   console.log(value1 + ' was selected in currency left hand side')
   console.log(value2 + ' was selected in currency right hand side')
   if(value1==null){
    alert('Please select any currency')
   }
   else if(value2==null){
    alert('Please select any currency')
   }

   //here is to validate the input of amount
   console.log(amount)
   if(amount!=null){
     if((isNaN(amount))===true){
       alert('Please input an amount of currency.')
     }
     else if(amount<=0){
       alert('Amount less than 1')
     }
     else if(amount>1000000){
       alert('Please amount no more than 1 million')
     }
     else
       amountValidated = true;

   }
   else {
      amountValidated = false;
      alert('Please input an amount!')
   }

   //send data to the server if all inputs are validated
   if(value1!=null && value2!=null && amountValidated==true)
   {
     fetch('http://192.168.0.11/api', {
        method: 'Post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "currency1": value1,
          "currency2": value2,
          "total": amount
        })
     })
      .then(res => res.json())
       .then(data => {
         console.log(data)
         setApiResponse(data)
         setBgColor("bgChange")
        })
        .catch(err => console.error("Error:", err))

   }
 }

 return (
      <main >
       <div className="container">
       <div className="row">
        <form id='currencyForm' onSubmit={handleSubmit} method='post' >
         <input id="Amount" name="total" style={inputStyle}  onChange={DetectInputValue} />
         <select id="selectForm1" name="currency1" onChange={handleChange}>
          <Dropdown />
         </select>
         <img src={url1} />
         <img src={logo} alt="a logo" id="logo" style={logoStyle}/>
         <select id="selectForm2" name="currency2" onChange={handleChange}>
          <Dropdown />
         </select>
         <img src={url2} />
        </form>
        </div>
         <input id="btn" type="submit" value="Convert" style={submitStyle} form='currencyForm' />
       </div>
       <div className={bgColor}>
       <div className="apiMessages">
        <ConvertCurrency 
         reponseData={apiResponse}
         total={apiResponse.num} 
         currency1={apiResponse.codeOfcur1}
         currency2={apiResponse.codeOfcur2}
         amountConvert={apiResponse.exchangeRate}
         curr1={apiResponse.price1}
         curr2={apiResponse.price2}
         />
       </div>
       </div>
      </main>

    )
}



export default MainContent
