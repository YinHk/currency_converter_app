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
    // let now = new Date()
    // console.log('Today: ' + now.toUTCString())
     //let last30days = new Date(now.setDate(now.getDate() - 30)).getDate()
     //console.log('Last 30th day: ' + last30days.toUTCString())




     var d = new Date()
     var date = d.getDate()
     var month = d.getMonth()+1
     var year = d.getFullYear()
     var now = year.toString()+"-"+month.toString()+"-"+date.toString()
     var last30date = new Date(d.setDate(d.getDate() - 30)).getDate()
      //var D = new Date(d.setDate(d.getDate()-30)).getMonth()+2
     var last30dateOfmonth = new Date(d.setDate(d.getDate() - 30)).getMonth()+2
    // var ggg = new Date(d.setDate(d.getDate()-30)).getMonth()+2
     var last30dateOfyear = new Date(d.setDate(d.getDate() - 30)).getFullYear()
     console.log(now)
     //console.log(last30date)
    // console.log(D)
     console.log(last30dateOfmonth)
    // console.log(ggg)
    // console.log(last30dateOfyear)
     var back = last30dateOfyear.toString()+"-"+last30dateOfmonth.toString()+"-"+last30date.toString()
     console.log(back)

     const url = "https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=USD"
     http.get(url, function(resp){
       console.log(resp.statusCode)

       resp.on("data", function(data){
        //const dataGetback = JSON.parse(data)
        console.log(JSON.parse(data))
       })

    })

   })

app.post('/graph', function (req,res){
    res.status(200)
    console.log("I got a request")
    /*let today = new Date()
    let date = today.getDate()
    let month = today.getMonth()+1
    let year = today.getFullYear()
    let now = year.toString()+"-"+month.toString()+"-"+date.toString()
    let last30date = new Date(today.setDate(today.getDate() - 30)).getDate()
    let last30dateOfmonth = new Date(today.setDate(today.getDate() - 30)).getMonth()+2
    let last30dateOfyear = new Date(today.setDate(today.getDate() - 30)).getFullYear()
    console.log(now)
    console.log(last30date.toString())
    console.log(last30dateOfmonth.toString())
    console.log(last30dateOfyear.toString())*/

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
