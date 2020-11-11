const mongoose=require("mongoose")
const mongoconfig = require("./config")


module.exports={
    uri_prod : mongoconfig.uri_prod,
    uri_test : mongoconfig.uri_test,
    options: {
        keepAlive: true,
        //reconnectTries: Number.MAX_VALUE,
        socketTimeoutMS: 100000,
        promiseLibrary: global.Promise,
        connectTimeoutMS:3600000,
        poolSize : 5,
        readPreference: "secondary",
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
}

const mongdb_conn_prod = mongoose.createConnection(mongoconfig.uri_prod,mongoconfig.options);
const mongdb_conn_test = mongoose.createConnection(mongoconfig.uri_test,mongoconfig.options)


mongdb_conn_prod.then((result)=>{
    console.log("Mongodb prod connection success ",result._readyState)
}).catch((err)=>{
    console.log("Mongodb prod connection err ",err)
});


mongdb_conn_test.then((result)=>{
    console.log("Mongodb test connection success ",result._readyState)
}).catch((err)=>{
    console.log("Mongodb test connection err ",err)
});


module.exports={
    mongdb_conn_prod,
    mongdb_conn_test
};