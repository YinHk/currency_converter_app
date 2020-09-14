import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


function App() {

 return (
    <div className="body_part">
      <div className="body_head">
       <Header />
      </div>
      <div className="body_content">
       <div className="main_content">
        <MainContent />
       </div>
      </div>
      <div className="body_footer">
       <Footer />
      </div>
    </div>

  )

}


export default App