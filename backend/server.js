const express = require("express")
const { scanURL, scanPhone } = require("./scanner")
const cors = require("cors")
const path = require("path")

const connectDB = require("./database")

// import database models
const Scan = require("./models/Scan")
const Report = require("./models/Report")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

// serve frontend files
app.use(express.static(path.join(__dirname, "../public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

const PORT = 3000

app.listen(PORT, () => {
    console.log("Server running on port " + PORT)
})

app.post("/scan", async (req,res)=>{

    console.log(req.body)
    
    const { url, phone } = req.body

    if(url){
        const result = scanURL(url)

        await Scan.create({
            url:url,
            result:result
        })

        return res.json({ result })
    }

    if(phone){
        const result = scanPhone(phone)

        await Scan.create({
            phone:phone,
            result:result
        })

        return res.json({ result })
    }

    res.json({ result:"No data provided" })

})

// server backend files

app.post("/report", async (req,res)=>{

    const { url, phone, description } = req.body

    await Report.create({
        url,
        phone,
        description
    })

    res.json({ message:"Report submitted successfully" })

})