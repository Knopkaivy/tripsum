const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;
    
const routes = require('./routes');

    
app.use(express.static(__dirname +'/public'));
app.use(express.static(__dirname +'/views'));

app.use(routes); 

   

    
app.listen(port, () =>{
    console.log('APP IS RUNNING ON PORT ' + port);
});