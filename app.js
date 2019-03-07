const express = require("express");
const morgan = require("morgan");
const app = express();

//static folder
app.use(express.static(__dirname + "/public"));
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use('', (req, res) => {
    res.send('');
});



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
});