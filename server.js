
const express = require("express");
const { param } = require("express/lib/request");
const app = express();
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'}, 
    'Chance The Rapper': {
        'age': 29,
        'birthName': 'Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'},
    'unknown': {
        'age': '∞',
        'birthName': 'unknown',
        'birthLocation': 'Johto Region - Pokeland'}  
}

// It's like an EventListener, on a request to load /, we can get the request and trigger a response
app.get('/', (req,res) => {
    //looks in main directory for /index.html
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:rappername', (req,res) => {
    const rapper = req.params.rappername.toLowerCase();
    if (rappers[rapper]){
        res.json(rappers[rapper]);
    }
    else{
        res.json(rappers['unknown']);
    }
    res.end()
})

// 8000 is where to listen, and the function is what to do
// always the same pattern: where/when to listen, and a function
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now online at port: ${PORT}!`);
})