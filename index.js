const express = require('express');
const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: true}));


const chkRouter = require('./routes/route')
app.use('/', chkRouter)


const PORT = process.env.PORT || 9090

app.listen(PORT, ()=>{
    console.log(`server up on ${PORT}`);
})