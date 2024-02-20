const { UnitRep } = require('../models');

const getAllUnitRep = async (req,res) => {
    try {
        const unitReps = await UnitRep.find()
        res.json(unitReps)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getUnitRepById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const unitReps = await UnitRep.findById(id);
        if (unitReps) {
            return res.json(unitReps);
        }
        return res.status(404).send('Unit Representative not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUnitRep = async (req, res) => {
    try {
        const unitReps = await new UnitRep(req.body);
        await unitReps.save();
        return res.status(201).json({unitReps,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateUnitRep = async (req, res) => {
    try {
        let { id } = req.params;
        let unitReps = await UnitRep.findByIdAndUpdate(id, req.body, { new: true })
        if (unitReps) {
            return res.status(200).json(unitReps)
        }
        throw new Error("Unit Representative not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUnitRep = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await UnitRep.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Unit Representative deleted");
        }
        throw new Error("Unit Representative not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllUnitRep,
    getUnitRepById,
    createUnitRep,
    updateUnitRep,
    deleteUnitRep
}