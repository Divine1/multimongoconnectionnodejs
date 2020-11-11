const {geographyModel,physicsModel} = require("../models/db_model");





const geography = (req,res)=>{
    let geographyData = new geographyModel({
        teachername : "geoteacher",
        year : "2010"
    });
    geographyData.save().then((result)=>{
        console.log("geographyData result ",result);
    }).catch((err)=>{
        console.log("geographyData err ",err);
    })
    res.send({})
}


const physics = (req,res)=>{
    let physicsData = new physicsModel({
        teachername : "physicsteacher",
        year : "2015"
    });
    physicsData.save().then((result)=>{
        console.log("physicsData result ",result);
    }).catch((err)=>{
        console.log("physicsData err ",err);
    })
    res.send({})
}

module.exports={
    geography,
    physics
};
