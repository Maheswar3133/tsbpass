
const Joi = require('@hapi/joi')

const architectSchema = {
    architect: () => {
        return Joi.object({
                applicant_type: Joi.string().required(),
                applicant_name: Joi.string().required(),
                relationship_type: Joi.string().required(),
                relationship_name: Joi.string().required(),
                industry: Joi.string().required(),
                address: Joi.string().required(),
                state: Joi.string().required(),
                pin: Joi.number().required(),
                mobile: Joi.string().required(),
                email: Joi.string().required(),
                district: Joi.string().required(),
                muncipality: Joi.string().required(),
                mandal: Joi.string().required(),
                village: Joi.string().required(),
                consultant_type: Joi.string().required(),
                license_number: Joi.string().required(),
                arct_name: Joi.string().required(),
                arct_address: Joi.string().required(),
                arct_mobile: Joi.string().required(),
                arct_email: Joi.string().required()
        })
    }
}

module.exports = architectSchema;