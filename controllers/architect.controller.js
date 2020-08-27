const architechManager = require('../managers/architect.manager');
const joiValidator = require('../helpers/validator');
const architectSchema = require('../schemas/architect.schema')

const architectController = {
    /**
     * Add new Record
     */
    create: async (req, res) => {
        try {
            const validReq = await joiValidator.jsonValidator(req.body, architectSchema.architect());
            const architectResult = await architechManager.createArchitect(validReq);
            res.send(architectResult)
        } catch (err) {
            console.log(err)
            res.send(err)
        }
    },

    /**
     * Get all Records
     */
    get: (req, res) => {
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

module.exports = architectController;