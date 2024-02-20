const { CondoUnit } = require('../models');
//do I need to include UnitRep and UnitStyle for the create...?

const getAllCondoUnit = async (req,res) => {
    try {
        const condoUnits = await CondoUnit.find()
        res.json(condoUnits)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getCondoUnitById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const condoUnits = await CondoUnit.findById(id);
        if (condoUnits) {
            return res.json(condoUnits);
        }
        return res.status(404).send('Condo Unit not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createCondoUnit = async (req, res) => {
    try {
        const condoUnits = await new CondoUnit(req.body);
        await condoUnits.save();
        return res.status(201).json({condoUnits,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateCondoUnit = async (req, res) => {
    try {
        let { id } = req.params;
        let condoUnits = await CondoUnit.findByIdAndUpdate(id, req.body, { new: true })
        if (condoUnits) {
            return res.status(200).json(condoUnits)
        }
        throw new Error("Condo Units not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCondoUnit = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CondoUnit.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Condo unit deleted");
        }
        throw new Error("Condo unit not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllCondoUnit,
    getCondoUnitById,
    createCondoUnit,
    updateCondoUnit,
    deleteCondoUnit
}