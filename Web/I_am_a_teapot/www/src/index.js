const express    = require('express');
const bodyParser = require('body-parser')
const axios      = require('axios')
const request    = require('request-promise')
const app        = express();
                require('dotenv').config();
               
const PORT    = process.env.PORT;

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {

  // Cookie

  res.send("index.html")
})

// app.get('/test', async (req, res) => {
//   res.status(418)
//   res.set('X-Forwarded-For', '185.192.70.124')
//   res.set('Date', 'Thu, Dec 2 2020 00:00:00 GMT')
//   res.set('Referer', "https://www.kungfutea.com/")
//   res.set('Cookie', "cookie=oatmeal raisin")
//   res.send("TEST")
// })

app.post('/brewtea', async (req, res) => {

  let url = req.body.brew_link

  let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}/gi;
  if(!url.match(regex)) {
    res.send({resp: "INVALID TEAPOT"})
    return
  }


  try {
    const resp = await axios.get(url)

    res.send({resp : "NOT A TEAPOT"})
    return;

  } catch (error) {

    let resp    = error.response
    if(!resp) {
      res.send({resp : "NOT A TEAPOT"})
      return;
    }

    let headers = resp.headers;

    console.log(headers)

    if(resp.status != 418) {
      res.send({resp : "NOT A TEAPOT"})
      return;
    }

    
    let ip = headers['x-forwarded-for']

    if(!ip) {
      console.log("No header")
      res.send({resp : "I heard the best tea originates from England!"})
      return;
    }

    let ipResp = await request(`https://api.iplocation.net/?ip=${ip}`)

    let json = JSON.parse(ipResp)
    let cc   = json.country_code2

    if(cc != "GB") {
      res.send({resp : "TEA DOES NOT ORIGINATE FROM ENGLAND!"})
      return;
    }

    let date = headers['date'];

    if(!date) {
      res.send({resp : "I like my tea aged... make sure its been aged for at least two years"})
      return;
    }

    let hDate = (new Date(date)).getTime()
    let now   = Date.now()

    if(typeof(hDate) != 'number') {
      res.send({resp : 'That tea hasnt aged anough. Give it some more time...'})
      return;
    }

    if(now - hDate < 63113904000) {
      res.send({resp : 'That tea hasnt aged anough. Give it some more time...'})
      return;
    }

    let hReferer = headers['referer']

    if(!hReferer) {
      res.send({resp : 'What a robust flavor... who refered this tea to you? Was it kungfutea?'})
      return;
    }

    if(hReferer != "https://www.kungfutea.com/") {
      res.send({resp : 'What a shame... I love tea from kungfutea'})
      return;
    }

    let hcookie = headers['cookie']

    if(!hcookie) {
      res.send({resp : 'You know what would go really well with this tea... some oatmeal raisin cookies.'})
      return;
    }

    let regex = /oatmeal raisin/gi;
    if(!hcookie.match(regex)) {
      res.send({resp: "Seems to me like you send the wrong type of cookie!"})
      return
    }

    res.send({resp : "What delicious tea... Here have this gift flag{W0nd3rFu1_T3A_129837}"})
  }
})

app.listen(PORT, () => console.log('Server is up and running on ' + PORT));