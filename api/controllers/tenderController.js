'use strict';


var mongoose = require('mongoose'),
TenderList = mongoose.model('TenderList');

exports.list_all_tenders = function(req, res) {
    TenderList.find({}, function(err, tenderlist) {
    if (err)
      res.send(err);
    res.json(tenderlist);
  });
};




exports.create_a_tender = function(req, res) {
  var new_tender = new TenderList(req.body);
  new_tender.save(function(err, tenderlist) {
    if (err)
      res.send(err);
    res.json(tenderlist);
  });
};


// exports.read_a_task = function(req, res) {
//   Task.findById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.update_a_task = function(req, res) {
//   Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };


// exports.delete_a_task = function(req, res) {


//   Task.remove({
//     _id: req.params.taskId
//   }, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Task successfully deleted' });
//   });
// };
