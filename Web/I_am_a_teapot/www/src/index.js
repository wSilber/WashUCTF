const express    = require('express');
const bodyParser = require('body-parser')
const axios      = require('axios')
const app     = express();
                require('dotenv').config();
               
const PORT    = process.env.PORT;

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.send("index.html")
})

app.get('/test', async (req, res) => {
  res.status(418)
  res.set('test', 'test')
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

    res.send({resp : "My HEAD rEally huRts. Can you bring me some tea from England?"})
    return;
  }
})

app.listen(PORT, () => console.log('Server is up and running on ' + PORT));