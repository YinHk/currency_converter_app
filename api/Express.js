const express = require('express')
const http = require("http")
const bodyParser = require('body-parser')

const app = express()

app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )

app.get('/', function (req,res){

    res.sendFile(__dirname + '../../public/index.html' )
    console.log(req.body)
})

app.post('/', function(req,res){
    
    var amount = req.body.total
    var cur1 = req.body.currency1
    var cur2 = req.body.currency2
    const apiKey = "ugzzCe04BtL12c3Zz9qeNjOdHa3DAkFOxQZakLIsKW5vA02mMr"

    const url = "https://fcsapi.com/api-v2/forex/converter?pair1=" + cur1 + "&pair2=" + cur2 + "&amount=" + amount + "&access_key=" + apiKey
    
    http.get(url, function(resp){
     console.log(resp.statusCode)
     
     resp.on("data", function(data){
         const currencyData = JSON.parse(data)

         const convertData = currencyData.response
         const firstCurr = convertData[Object.keys(convertData)[0]]
         const secondCurr = convertData[Object.keys(convertData)[1]]
         const exchange = convertData[Object.keys(convertData)[2]]
         
         res.write("<h3> "+amount+" "+cur1+" = </h3>")
         res.write("<h1>"+exchange+"</h1>  " +cur2)
         res.write("<h5>1 "+cur2+" = "+firstCurr+" "+cur1+"</h5>")
         res.write("<h5>1 "+cur1+" = "+secondCurr+" "+cur2+"</h5>")
         res.send()

     }


     )


     }
    )
 }
)



app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})


/* const obj={
  
    status: true,  
    code: 200,
    msg: "Successfully",
    response: {
    price_1x_HKD: 0.07317,
    price_1x_JPY: 13.6669,
    total: 1366.69
    },  
    info: {
    server_time: "2020-08-09 13:35:30 UTC",
    credit_count: 1
    }
      
    }
    
    const resp = obj.response
    const firstCurr = resp[Object.keys(resp)[0]]
    //[Object.keys(response)[0]]
    console.log(firstCurr);
    // expected output: 0.07317 */