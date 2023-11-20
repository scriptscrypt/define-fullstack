const connectToMongo=require('./config/db');
const express = require('express')
const cors=require('cors')
const app = express()
const port = 5500
app.use(cors())

connectToMongo();

app.use('/ekyc',require('./routes/ekydetails'))

app.get('/',(req,res)=>{   
    res.send("server running")
})

app.listen(port, () => {
  console.log(`DeFinE backend listening on port ${port}`)
})

