const express = require('express');
const Location = require('../db/models/location-schema');

module.exports.listLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    return res.status(200).json(locations);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.addLocation = async (req, res) => {
  try {
    const body = req.body;
    const location = await Location.create(body);
    return res.status(201).json({
      message: 'Location added succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    return res.status(200).json(location);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const location = await Location.findByIdAndUpdate(id, body);
    return res.status(200).json({
      message: 'Location updated succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Location deleted succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
