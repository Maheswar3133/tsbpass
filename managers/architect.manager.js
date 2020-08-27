const ArchitectModel = require('../models').architect_details;
const applicantMananger = require('../managers/applicant.manager')
const architectManager = {

    createArchitect: (archiTechDetails) => {
        return new Promise(async (resolve, reject) => {
            try {
                const applicantResult = await applicantMananger.createApplicant(archiTechDetails);
                if (!applicantResult.id) {
                    reject({ message: 'Server Error.' })
                }
                archiTechDetails['applicant_id'] = applicantResult.id;
                const archiitectDetailsResp = await architectManager.addArchitect(archiTechDetails);
                resolve(archiitectDetailsResp)
            } catch (err) {
                reject(err)
            }
        })
    },

    /**
     * Add architect record in architect table
     */
    addArchitect: (architect) => {
        const architectDetails = {
            applicant_id: architect.applicant_id,
            consultant_type: architect.consultant_type ? architect.consultant_type: null,
            license_number: architect.license_number ? architect.license_number : null,
            name: architect.arct_name ? architect.arct_name : null,
            address: architect.arct_address ? architect.arct_address : null,
            mobile: architect.arct_mobile ? architect.arct_mobile : null,
            email: architect.arct_email ? architect.arct_email : null
        }
        return new Promise((resolve, reject) => {
            ArchitectModel.create(architectDetails)
                .then(Resp => {
                    resolve(Resp)
                })
                .catch(error => {
                    reject(error)
                });
        })
    }

}

module.exports = architectManager;
