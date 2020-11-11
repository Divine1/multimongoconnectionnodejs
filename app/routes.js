const prod = require("./controller/prodcontroller");
const test = require("./controller/testcontroller");


module.exports=(app)=>{
    app.get("/geo",prod.geography);
    app.get("/phy",prod.physics);

    app.get("/guj",test.gujarat);
    app.get("/pra",test.prague);
};