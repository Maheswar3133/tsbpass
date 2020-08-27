const applicantsModel = require('../models').applicants;

const applicantManager = {

    /** 
     * create applicant record in Applicant Table
     */
    createApplicant: (landDetails) => {
        return new Promise((resolve, reject) => {
            applicantsModel.create(landDetails)
                .then(resp => {
                    resolve(resp.dataValues);
                })
                .catch(err => {
                    reject(err)
                });
        });
    },
}

module.exports = applicantManager;