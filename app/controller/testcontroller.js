const {gujaratModel,pragueModel} = require("../models/db_model");





const gujarat = (req,res)=>{
    let gujaratData = new gujaratModel({
        statename : "gujaratstate",
        year : "1910"
    });
    gujaratData.save().then((result)=>{
        console.log("gujaratData result ",result);
    }).catch((err)=>{
        console.log("gujaratData err ",err);
    })
    res.send({})
}


const prague = (req,res)=>{
    let pragueData = new pragueModel({
        statename : "praguestate",
        year : "1920"
    });
    pragueData.save().then((result)=>{
        console.log("pragueData result ",result);
    }).catch((err)=>{
        console.log("pragueData err ",err);
    })
    res.send({})
}

module.exports={
    gujarat,
    prague
};
