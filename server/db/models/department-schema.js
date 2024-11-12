const { Schema, model } = require('mongoose');

const departmentSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: 'http://localhost:8888/img/default-department-img.png',
    },
    about: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Department = model('departments', departmentSchema);

module.exports = Department;
