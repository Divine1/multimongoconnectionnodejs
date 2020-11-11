/* eslint-disable camelcase */
'use strict';

const mongoose =  require('mongoose');
const {Schema} = mongoose;

var gujaratSchema = new mongoose.Schema({
    statename: {
        type: String
    },
    year: {
        type: String
    },
});

module.exports=gujaratSchema;