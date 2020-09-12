const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
let messages = [];
app.post("/send-message", (req, res) => {
    // console.log(req.body); 
    messages.push(req.body);
    // res.send(messages);
    res.send(req.body);
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenign on port ${port}....`));
