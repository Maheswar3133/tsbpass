
const Joi = require("@hapi/joi");


const validationHelper = {

    jsonValidator: (dataToValidate, joiSchema) => {
        return new Promise((resolve, reject) => {
            Joi.validate(dataToValidate, joiSchema)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err.details)
            })
        });
    }
}

module.exports = validationHelper;