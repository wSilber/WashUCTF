const request = require('request-promise')

// app.get('/test', async (req, res) => {
//     res.status(418)
//     res.set('X-Forwarded-For', '185.192.70.124')
//     res.set('Date', 'Thu, Dec 2 2020 00:00:00 GMT')
//     res.set('Referer', "https://www.kungfutea.com/")
//     res.set('Cookie', "cookie=oatmeal raisin")
//     res.send("TEST")
//   })

const TEA_POT = {
    brew: async(resp) => {
        if(!resp) {
            return({resp : "NOT A TEAPOT"})
            
        }
    
        let headers = resp.headers;
    
        console.log(headers)
    
        if(resp.status != 418) {
            return({resp : "NOT A TEAPOT"})
            
        }
    
        
        let ip = headers['x-forwarded-for']
    
        if(!ip) {
            console.log("No header")
            return({resp : "I heard the best tea originates from England!"})
        
        }
    
        let ipResp = await request(`https://api.iplocation.net/?ip=${ip}`)
    
        let json = JSON.parse(ipResp)
        let cc   = json.country_code2
    
        if(cc != "GB") {
            return({resp : "TEA DOES NOT ORIGINATE FROM ENGLAND!"})
          
        }
    
        let date = headers['date'];
    
        if(!date) {
            return({resp : "I like my tea aged... make sure its been aged for at least two years"})
          
        }
    
        let hDate = (new Date(date)).getTime()
        let now   = Date.now()
    
        if(typeof(hDate) != 'number') {
            return({resp : 'That tea hasnt aged anough. Give it some more time...'})
          
        }
    
        if(now - hDate < 63113904000) {
            return({resp : 'That tea hasnt aged anough. Give it some more time...'})
         
        }
    
        let hReferer = headers['referer']
    
        if(!hReferer) {
            return({resp : 'What a robust flavor... who refered this tea to you? Was it kungfutea?'})
         
        }
    
        if(hReferer != "https://www.kungfutea.com/") {
            return({resp : 'What a shame... I love tea from kungfutea'})
         
        }
    
        let hcookie = headers['cookie']
    
        if(!hcookie) {
            return({resp : 'You know what would go really well with this tea... some oatmeal raisin cookies.'})
       
        }
    
        let regex = /oatmeal raisin/gi;

        if(!hcookie.match(regex)) {
            return {resp: "Seems to me like you send the wrong type of cookie!"}
        }
    
        return ({resp : "What delicious tea... Here have this gift flag{W0nd3rFu1_T3A_129837}"})
    }
}

module.exports = {TEA_POT}