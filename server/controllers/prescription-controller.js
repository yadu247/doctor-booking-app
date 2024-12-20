const { populate } = require('dotenv');
const Prescription = require('../db/models/prescription-schema');

module.exports.addPrescription = async (req, res) => {
  try {
    const body = req.body;
    const prescription = await Prescription.create(body);
    return res.status(201).json({
      message: 'Prescription added succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.showPrescriptions = async (req, res) => {
  try {
    const { appointmentId } = req.params;
    const prescriptions = await Prescription.findOne({
      appointment: appointmentId,
    })
      .populate('appointment')
      .populate('doctor')
      .populate({ path: 'doctor', populate: { path: 'hospital' } })
      .populate({
        path: 'appointment',
        populate: {
          path: 'slot',
        },
      });
    return res.status(200).json(prescriptions);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.showPrescriptionsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const prescriptions = await Prescription.find({
      doctor: doctorId,
    })
      .populate('appointment')
      .populate('user')
      .populate({
        path: 'appointment',
        populate: {
          path: 'slot',
        },
      });
    return res.status(200).json(prescriptions);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
