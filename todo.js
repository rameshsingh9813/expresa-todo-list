const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

app.post('/', function(request, response){
    console.log(response)
})


app.listen(port, function(reque,resp){
    console.log("Server is running on port "+port)
})

