const joi = require('joi');
const Joi = require("@hapi/joi");

const architectSchema = {
    architect: () => {
        return Joi.object({
            id: Joi.number().required()
        })
    }
}

module.exports = architectSchema;