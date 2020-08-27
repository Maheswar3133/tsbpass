
const Joi = require('@hapi/joi')

const landDetailsSchema = {

    /**
     * Land details schema for validation
     */
    landDetails: () => {
        return Joi.object({
                    district: Joi.string().required(),
                    muncipality: Joi.string().required(),
                    mandal: Joi.string().required(),
                    village: Joi.string().required(),
                    location_type: Joi.string().required(),
                    building_number: Joi.string().required(),
                    plot_area: Joi.string().required(),
                    survey_number: Joi.string().required(),
                    location_of: Joi.string().required(),
                    sale_deed: Joi.string().required(),
                    property_tax: Joi.string().required(),
                    order_copy: Joi.string().required(),
                    geo_coordinates: Joi.string().required(),
                    applicant_type: Joi.string().required(),
                    applicant_name: Joi.string().required(),
                    address: Joi.string().required(),
                    state: Joi.string().required(),
                    pin: Joi.number().required(),
                    mobile: Joi.string().required(),
                    email: Joi.string().required()
        })
    }
}

module.exports = landDetailsSchema;