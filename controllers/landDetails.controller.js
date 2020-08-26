const landDetailsManager = require('../managers/landDetails.manager');
const joiValidator = require('../helpers/validator');
const architectSchema = require('../schemas/architect.schema')

const landDetailsController = {
    /**
     * Add new Record
     */
    create: async (req, res) => {
        try {
            // const validReq = await joiValidator.jsonValidator(req.body, architectSchema.architect());
            const landDetailsResult = await landDetailsManager.createLandDetails(req.body);
            res.send(landDetailsResult)
        } catch (err) {
            res.send(err)
        }
    },

    /**
     * Get all Records
     */
    getAll: (req, res) => {
        res.send({ data: "list" })
    },
    /**
     * Get Record by Record ID
     */
    getById: (req, res) => {
        res.send({ data: "list by Id" })
    },

    /** 
     * Update Record by Record ID
     */
    update: (req, res) => {
        res.send({ data: "Update By Id" })
    },

    /**
     * Delete Record by Record ID
     */
    delete: (req, res) => {
        res.send({ data: "delete By Id" })
    }
}

module.exports = landDetailsController;