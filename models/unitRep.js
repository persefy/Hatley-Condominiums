const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const UnitRep = new Schema(
    {
        name: { type: String, required: true },
        owner: { type: Boolean, required: true },
        repPhone: {type: String,  required: true },
        officeAddress: {type: String},
        officeHours: {type: String},
        officeDays: {type: String},
        unitRepImg: {type: String, required: true},
        unitRepSlogan: {type:String}
    },
    { timestamps: true }
)
module.exports = UnitRep