const express = require("express");
const app = express();
const path = require("path")

app.use(express.static(__dirname+"/public"));

app.listen(3000, ()=>
    console.log("Server corriendo")
);

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, '/views/carrito.html'))
})

