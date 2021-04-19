const express = require('express');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const Equipments = require('../models/equipment');

const equipmentRouter = express.Router();

equipmentRouter.route('/')
.get(asyncHandler(async(req, res) => {
    const equipments = await Equipments.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(equipments);
}))

.post(asyncHandler(async(req, res) => {
    const equipments = await Equipments.create(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(equipments);
}))

.put(asyncHandler(async(req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not allowed on /equipments`)
}))

.delete(asyncHandler(async(req, res) => {
    const equipments = await Equipments.remove({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(equipments);
}))

equipmentRouter.route('/:equipmentId')
.get(asyncHandler(async(req, res) => {
    const equipment = await Equipments.findById(req.params.equipmentId);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(equipment);
}))

.post(asyncHandler(async(req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /equipment/equipmentId`);
}))

.put(asyncHandler(async(req, res) => {
    const equipment = await Equipments.findByIdAndUpdate(req.params.equipmentId, {$set: req.body}, {new: true});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(equipment);
}))

.delete(asyncHandler(async(req, res) => {
    const equipment = await Equipments.findByIdAndRemove(req.params.equipmentId);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(equipment);
}))

module.exports = equipmentRouter;