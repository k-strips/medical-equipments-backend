const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    department: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true
    },
    unit_cost: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
},{
    timestamps: true
});

let Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;