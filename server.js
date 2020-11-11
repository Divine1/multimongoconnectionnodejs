const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
require("./app/routes")(app);

app.listen(3000,()=>{
    console.log("Application listening on port 3000")
});