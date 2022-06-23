const express = require("express");
const bodyParser = require("body-parser");
const {spawn} = require('child_process');
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res)=> {
    res.sendFile(`$/index.html`);
});

var listener = app.listen(process.env.PORT, () => {
    console.log(`Your app is listeneing on port${listener.address().port}`);
});

app.post("/readPython", (request, response)=>{
    var dataToSend;
    const locat = getLocation;
    const python=spawn('python3', ['/weather.py'], locat);

    python.stdout.on('data', function(data){
        dataToSend=data.toString();
    });
    python.stderr.on('data', data =>{
        console.error("test");
    });

    python.on('exit', (code)=>{
        console.log("test" + code);
    });
});

// get user's location from their input to the button
function getLocation(){
let loc = document.getElementById("location").value;
alert("this far");
return loc;
};

document.addEventListener('DOMContentLoaded', function() {
    var clic = document.getElementById("go");
    clic.addEventListener('click', getLocation); 
});
