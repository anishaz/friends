let express = require("express");
let app = express();

let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/friends');

let path = require("path");

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public', 'dist')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.get('*', function (req, res) {
    res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(6789, ()=> console.log("Server is listening on port 6789"));
