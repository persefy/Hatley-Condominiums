const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const UnitStyle = new Schema(
    {
        name: { type: String, required: true },
        sqFtMin: { type: Number, required: true },
        sqFtMax: { type: Number, required: true },
        bedMin: {type: Number, required: true },
        bedMax: {type: Number, required: true },
        bathMin: {type: Number, required: true },
        bathMax: {type: Number, required: true },
        amenityOptions: {type: String, required: true},
        spaceScore: {type: Number, required: true },
        unitStyleImg: {type: String, required: true}
    },
    { timestamps: true }
)
module.exports = UnitStyle