const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDb = require('./server/database/connection')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT ||8080

// log requests
app.use(morgan('tiny'))

// mogodb connection
connectDb();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set("view engine",'ejs')

// load assets
app.use('/asset',express.static('asset'))

// load routers
app.use('/',require('./server/routes/router'))

app.listen(3000,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})