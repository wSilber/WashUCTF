# I Am A Teapot Solution

## Challenge Description

Bring me some tea please

[http://3.136.112.49:5000/](http://3.136.112.49:5000/)

## Solution

The user is directed to place the URL of a teapot. The user must submit a URL of a webserver which returns a 418 "I am a teapot" error. 

When this is submitted the text changes to "I heard the best tea originates from England!". The webserver must also use the `C-forwarded-for` header with an ip address that originates from England to get to the next clue.

"I like my tea aged... make sure its been aged for at least two years" hints that the webserver must send an additional `Date` header with a value of at least two years prior to get to the next hint.

'What a robust flavor... who refered this tea to you? Was it kungfutea?'. The server must use an additional header of `Referer` with the value of the website for Kungfutea "https://www.kungfutea.com/"

The last hint, 'You know what would go really well with this tea... some oatmeal raisin cookies.'. When the server also reponds with a header of `Cookie` with either a key or value that contains 'oatmeal raisin' the user is given the flag: `flag{W0nd3rFu1_T3A_129837}`.

### flag{W0nd3rFu1_T3A_129837}
