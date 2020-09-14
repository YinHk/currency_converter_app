import React from "react"
import "../style.css"

function Header() {

    let today = new Date()
    let date = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()

    return (
     <header>
      <div className="head">
       <div className="row">
        <div className="col-md-8 pt-3 pl-5">
          <h2>Currency Converter</h2>
        </div>
        <div className="col-md-4 pt-3 pl-5"> 
          <p>This currency converter is up to date from {year+"-"+month+"-"+date}.<br/>Exchange rates will be updated per 24 hour</p>
        </div>
       </div>
      </div>
     </header>

    )
}

export default Header
