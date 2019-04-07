'use strict';


var mongoose = require('mongoose'),
TenderApplicant = mongoose.model('TenderApplicant');

exports.add_a_applicant = function(req, res) {
  var new_applicant = new TenderApplicant(req.body);
  new_applicant.save(function(err, tenderapplicant) {
    if (err)
      res.send(err);
    res.json(tenderapplicant);
  });
};

 exports.read_a_applicant = function(req, res) {
   TenderApplicant.findById(req.params.applicantId, function(err, tenderapplicant) {
     if (err)
       res.send(err);
     res.json(tenderapplicant);
   });
 };


exports.update_a_applicant = function(req, res) {
  TenderApplicant.findOneAndUpdate({_id: req.params.applicantId}, req.body, {new: true}, function(err, tenderapplicant) {
    if (err)
      res.send(err);
    res.json(tenderapplicant);
  }); 
};

exports.list_all_applicants = function(req, res) {
  TenderApplicant.find({"Tender_id": req.params.tenderID}, function(err, tenderapplicant) {
    if (err)
      res.send(err);
    res.json(tenderapplicant);
  });
};


// exports.delete_a_task = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
