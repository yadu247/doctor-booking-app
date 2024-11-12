const express = require('express');
const Department = require('../db/models/department-schema');

module.exports.listDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    return res.status(200).json(departments);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.addDepartment = async (req, res) => {
  try {
    const body = req.body;
    const department = await Department.create(body);
    return res.status(201).json({
      message: 'Department added succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    return res.status(200).json(department);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const department = await Department.findByIdAndUpdate(id, body);
    return res.status(200).json({
      message: 'Department updated succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'Department deleted succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
