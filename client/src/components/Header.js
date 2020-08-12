import React from "react"


function Header() {

    let today = new Date()
    let date = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()

    return (
      <header>
      <div className="title">
       <h1>Your Currency Converter</h1>
      </div>
      <div className="date"> 
         <p>{year+"-"+month+"-"+date}</p>
         <p>This currency converter is up to date from {year+"-"+month+"-"+date}.<br/>Exchange rates will be updated per 24 hour</p>
        </div>
      </header>

    )
}

export default Header
