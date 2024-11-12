const { Schema, model } = require('mongoose');

const hospitalSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
    },
    image: {
      type: String,
      default: 'http://localhost:8888/img/default-hospital-img.png',
    },
    about: {
      type: String,
      trim: true,
    },
    contactnumber: {
      type: String,
      trim: true,
    },
    department: {
      type: [Schema.Types.ObjectId],
      ref: 'departments',
    },
  },
  { timestamps: true }
);

const Hospital = model('hospitals', hospitalSchema);

module.exports = Hospital;
