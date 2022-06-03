
const express = require("express");
const { param } = require("express/lib/request");
const app = express();
const PORT = 8000

const rappers = {
    'savage': {
        'age': 29,
        'birthName': 'Sheyaa',
        'birthLocation': 'London, England'}, 
    'chance': {
        'age': 28,
        'birthName': 'chancey',
        'birthLocation': 'Chicago'},
    'unknown': {
        'age': '∞',
        'birthName': 'unknown',
        'birthLocation': 'pokeland'}  
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
app.listen(PORT, ()=>{
    console.log(`server is now online at port: ${PORT}!`);
})