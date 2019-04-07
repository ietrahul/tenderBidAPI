'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TenderListSchema = new Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the tender'
    },
    Start_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['ongoing', 'completed']
      }],
      default: ['ongoing']
    },
    End_date: {
      type: Date,
      default: new Date(+new Date() + 90*24*60*60*1000)
    },
  });

module.exports = mongoose.model('TenderList', TenderListSchema);
