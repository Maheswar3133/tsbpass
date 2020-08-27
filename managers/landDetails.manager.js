const landDetailsModel = require('../models').land_details;
const applicantMananger = require('../managers/applicant.manager')
const landDetailsManager = {

    createLandDetails: (landDetails) => {
        return new Promise(async (resolve, reject) => {
            try {
                const applicantResult = await applicantMananger.createApplicant(landDetails);
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

    /**
     * Create a new record in land details table
     */
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