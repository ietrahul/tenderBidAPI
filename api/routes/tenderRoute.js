'use strict';
module.exports = function(app) {
  var tenderList = require('../controllers/tenderController');
  var tenderApplicant = require('../controllers/tenderApplicantController');

  // tenderList Routes
  app.route('/tenders')
    .get(tenderList.list_all_tenders)
    .post(tenderList.create_a_tender);

   app.route('/bidders/:tenderID')
     .get(tenderApplicant.list_all_applicants);

  app.route('/applicants/')
     .post(tenderApplicant.add_a_applicant)

   app.route('/applicants/:applicantId')
     .get(tenderApplicant.read_a_applicant)
     .put(tenderApplicant.update_a_applicant);
//     .delete(tenderList.delete_a_applicant);
// 
};