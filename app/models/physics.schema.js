/* eslint-disable camelcase */
'use strict';

const mongoose =  require('mongoose');
const {Schema} = mongoose;

var physicsSchema = new mongoose.Schema({
    teachername: {
        type: String
    },
    year: {
        type: String
    },
});

module.exports=physicsSchema;