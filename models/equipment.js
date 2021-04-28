const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    department: {
        type: String
    },
    equipment: {
        type: String
    },
    unit_cost: {
        type: Number
    },
    quantity: {
        type: Number
    },
    total: {
        type: Number
    }
},{
    timestamps: true
});

let Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;