'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var TenderApplicantSchema = new Schema({
  Tender_id: {
    type: ObjectId,
    required: 'Tender id'
  },
  Applicant_Name: {
    type: String,
    required: 'Applicant Name'
  },
  Date_Applied: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['inprogress', 'completed']
    }],
    default: ['inprogress']
  },
  Doc_List: {
    type: Array,
    default:undefined
  },
  Date_Modified: {
    type: Date,
    default: ''
  },
});

module.exports = mongoose.model('TenderApplicant', TenderApplicantSchema);
