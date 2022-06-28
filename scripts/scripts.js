"use strict";

// Formatting style 1: For multiple objects that are all using the same method, 
// e.g GET, then this is better as you just need to change the initial method type instead of individually.

/*
async function fetchObject(url, payload) {
    const method = "GET"
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}

async function getMeme(){
    let meme = await fetchObject("https://api.imgflip.com/get_memes")
    if (meme.success==true){
        let img = document.createElement("img")
        document.body.appendChild(img)
        img.src = meme.data.memes[0].url
    }    
    else{
        alert("Failed")
    }

}

getMeme()

*/

// Formatting style 2: This is better when fetching multiple objects and you want to change some of them 
// to a different method type (e.g from GET to POST), you would only need to change the individual objects.

async function fetchObject(url, payload) { 
    const response = await fetch(url, { 
        method: "GET",
        body: JSON.stringify(payload),
        headers: { 'Accept': 'text/html', 'Content-Type': 'application/json' },
      });
    
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}

async function getMeme(){
    let meme = await fetchObject("https://api.imgflip.com/get_memes")
        if (meme.success==true){
            for(let i = 0; i<meme.data.memes.length; i++){
            let img = document.createElement("img")
            document.body.appendChild(img)
            img.src = meme.data.memes[i].url}
        } 
        else{
            alert("Failed")
        }

}

getMeme()