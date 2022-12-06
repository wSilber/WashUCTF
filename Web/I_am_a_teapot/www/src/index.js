const express     = require('express');
const bodyParser  = require('body-parser')
const axios       = require('axios')
const { TEA_POT } = require('./brew.js')
const app         = express();
                    require('dotenv').config();
               
const PORT        = process.env.PORT;

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

/* Send user html page when GET request to no path */
app.get('/', (req, res) => {
    res.send("index.html")
})

/* Attempt to brew the user's tea */
app.post('/brewtea', async (req, res) => {

  let url = req.body.brew_link

  /* Make sure teapot is a valid url */
  let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}/gi;
  if(!url.match(regex)) {
    res.send({resp: "INVALID TEAPOT"})
    return
  }


  try {
    /* Attempt to go to user's teapot */
    const resp = await axios.get(url)

    res.send({resp : "NOT A TEAPOT"})
    return;

  /* Why does error occure on TEAPOT?????? */
  } catch (error) {
    let tea = await TEA_POT.brew(error.response)

    /* Send back customer's demands for tea */
    res.send(tea)
  }
})

app.listen(PORT, () => console.log('Server is up and running on ' + PORT));