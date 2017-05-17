const express = require('express'); 
const path = require('path'); 
const app = express(); 

app.use(express.static('./build'));

app.get('/', function (req, res) {
 	res.sendFile(path.join(__dirname, './build', 'index.html'));
});

let port = process.env.PORT || 5000; 
app.listen(port, function() { 
	console.log("Listening on " + port); 
});
