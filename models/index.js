const mongoose = require('mongoose')
const UnitRepSchema = require('./unitRep')
const UnitStyleSchema = require('./unitStyle')
const CondoUnitSchema = require('./condoUnit')

const UnitRep = mongoose.model('UnitRep', UnitRepSchema)
const UnitStyle = mongoose.model('UnitStyle', UnitStyleSchema)
const CondoUnit = mongoose.model('CondoUnit', CondoUnitSchema)

module.exports = {
    UnitRep,
    UnitStyle,
    CondoUnit
}