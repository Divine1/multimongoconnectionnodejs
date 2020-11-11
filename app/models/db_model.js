const {mongdb_conn_prod,mongdb_conn_test} = require("../../dbconfig/mongooseconfig");

const geographySchema = require("./geography.schema");
const gujaratSchema = require("./gujarat.schema");
const physicsSchema = require("./physics.schema");
const pragueSchema = require("./prague.schema");

const geographyModel = mongdb_conn_prod.model('geography',geographySchema);
const gujaratModel = mongdb_conn_prod.model('gujarat',gujaratSchema);
const physicsModel = mongdb_conn_test.model('physics',physicsSchema);
const pragueModel = mongdb_conn_test.model('prague',pragueSchema);



module.exports={
    geographyModel,
    gujaratModel,
    physicsModel,
    pragueModel
};