const http = require("https")
const express = require("express")

const bodyParser = require("body-parser")
const cors = require("cors")
//const router = express.Router();
const app = express();

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
// parse application/json
//app.use(bodyParser.json())

app.use(express.json({limit: '1mb'}))

app.get('/', function (req,res){
     console.log('server is runnung')

})

app.post('/api', function(req,res){
   res.status(200)
   console.log("I got a request")
   var amountOfcurrency = req.body.total
   var cur1 = req.body.currency1
   var cur2 = req.body.currency2

   console.log(amountOfcurrency)
   console.log(cur1)
   console.log(cur2)

   const apiKey = "ugzzCe04BtL12c3Zz9qeNjOdHa3DAkFOxQZakLIsKW5vA02mMr"

   const url = "https://fcsapi.com/api-v2/forex/converter?pair1=" + cur1 + "&pair2=" + cur2 + "&amount=" + amountOfcurrency + "&access_key=" + apiKey

   http.get(url, function(resp){
    console.log(resp.statusCode)

    resp.on("data", function(data){
        const currencyData = JSON.parse(data)

        const convertData = currencyData.response
        const firstCurr = Number(convertData[Object.keys(convertData)[0]])
        const secondCurr = Number(convertData[Object.keys(convertData)[1]])
        const exchange = Number(convertData[Object.keys(convertData)[2]])
        console.log(convertData)

        res.json({
          price1: firstCurr,
          codeOfcur1: cur1,
          price2: secondCurr,
          codeOfcur2: cur2,
          exchangeRate: exchange,
          num:amountOfcurrency
        })

        res.end()

    }


    )


    }
  )

 }
)

app.listen(3001, function(){
    console.log("Server is running on port 3001.")
})
