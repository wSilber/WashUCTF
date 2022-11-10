
function planB() {
    const b = "077050078048077072074102090065061061"
    
    var res = '';

    for(let i = 0; i < b.length; i+=3)
        res += String.fromCharCode(Number.parseInt(b.substring(i, i+3)))

        let container = document.createElement("div")
        let text = document.createElement('p')
        text.innerText = "(3) " + atob(res)
        let text2 = document.createElement('p')
        text2.innerText = "Beep Boop only rebots can find the next hint..."
        container.appendChild(text)
        container.appendChild(text2)
        document.body.appendChild(container)
}