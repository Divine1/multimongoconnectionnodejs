/* eslint-disable camelcase */
'use strict';

const mongoose =  require('mongoose');
const {Schema} = mongoose;

var geographySchema = new mongoose.Schema({
  teachername: {
    type: String
  },
  year: {
    type: String
  },
});

module.exports=geographySchema;