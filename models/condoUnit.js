const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const CondoUnit = new Schema(
    {
        unitRep_id: { type: Schema.Types.ObjectId, ref: 'unitRep_id'},
        unitStyle_id: { type: Schema.Types.ObjectId, ref: 'unitStyle_id'},
        unitNumber: { type: Number, required: true },
        monthlyRent: {type: Number, required: true},
        deposit: {type: String, required: true },
        available: {type: Boolean, required: true },
        squareFootage: {type: Number, required: true },
        beds: {type: Number, required: true },
        baths: {type: Number, required: true },
        utilitiesAvailable: {type: String, required: true },
        parkingSpaces: {type: Number, required: true },
        location: {type: String, required: true },
        description: {type: String, required: true },
        acceptsPets: {type: Boolean, required: true },
        petRent: {type: Number },
        petPolicy: {type: String }
    },
    { timestamps: true }
)
module.exports = CondoUnit