const express    = require('express');
const bodyParser = require('body-parser')
const axios      = require('axios')
const app     = express();
                require('dotenv').config();
               
const PORT    = process.env.PORT;

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {

  // Cookie

  res.send("index.html")
})

app.get('/test', async (req, res) => {
  res.status(418)
  res.set('X-Forwarded-For', '2.120.0.0')
  
  res.send("TEST")
})

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
    let headers = resp.headers;

    console.log(headers)

    if(resp.status != 418) {
      res.send({resp : "NOT A TEAPOT"})
      return;
    }

    
    let ip = headers['x-forwarded-for']

    console.log(ip)

    if(!ip) {
      console.log("No header")
      res.send({resp : "TEA DOES NOT ORIGINATE FROM ENGLAND!"})
      return;
    }

    const ipResp = await axios.get(`https://api.iplocation.net/?cmd=ip-country&ip=${ip}`)

    console.log(ipResp.data)

    res.send({resp : "My HEAD rEally huRts. Can you bring me some tea that originates from England?"})
    return;
  }
})

app.listen(PORT, () => console.log('Server is up and running on ' + PORT));