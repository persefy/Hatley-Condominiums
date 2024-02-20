const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const UnitStyle = new Schema(
    {
        name: { type: String, required: true },
        squareFootageRange: { type: String, required: true },
        bedroomsRange: {type: String,  required: true },
        bathroomsRange: {type: String, required: true },
        amenityOptions: {type: String, required: true},
        spaceScore: {type: String, required: true }
    },
    { timestamps: true }
)
module.exports = UnitStyle