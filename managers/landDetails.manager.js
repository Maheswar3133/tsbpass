const landDetailsModel = require('../models').land_details;
const applicantsModel = require('../models').applicants;

const landDetailsManager = {

    createLandDetails: (landDetails) => {
        return new Promise(async (resolve, reject) => {
            try {
                const applicantResult = await landDetailsManager.createApplicant(landDetails);
                if (!applicantResult.id) {
                    reject({message: 'Server Error.'})
                }
                landDetails['applicant_id'] = applicantResult.id;
                const landDetailsResp = await landDetailsManager.createLandRecord(landDetails);
                resolve(landDetailsResp)
            } catch (err) {
                reject(err)
            }
        })
    },

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

    createLandRecord: (landDetails) => {
        return new Promise((resolve, reject) => {
            landDetailsModel.create(landDetails)
                .then(landResp => {
                    resolve(landResp)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }


}

module.exports = landDetailsManager;