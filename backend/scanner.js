function scanURL(url) {

    let score = 0

    const suspiciousWords = ["login","verify","bank","secure","update","account"]

    suspiciousWords.forEach(word => {
        if(url.toLowerCase().includes(word)){
            score += 2
        }
    })

    if(url.includes("http://")){
        score += 2
    }

    if(url.match(/\d+\.\d+\.\d+\.\d+/)){
        score += 3
    }

    if(url.includes("bit.ly") || url.includes("tinyurl")){
        score += 2
    }

    if(score >= 5){
        return "Scam"
    }

    if(score >= 3){
        return "Suspicious"
    }

    return "Legitimate"
}

module.exports = { scanURL }

function scanPhone(number){

    let scamPrefixes = ["+234","+92","+1-876","+1-284"]

    for(let prefix of scamPrefixes){
        if(number.startsWith(prefix)){
            return "Possible Scam"
        }
    }

    if(number.length < 10){
        return "Invalid Number"
    }

    return "Looks Safe"
}

module.exports = { scanURL, scanPhone }