const Slot = require('../db/models/slot-schema');
const Appointment = require('../db/models/appointment-schema');
const moment = require('moment');

module.exports.listSlotByDoctorId = async (req, res) => {
  try {
    const { date, doctor } = req.query;
    const query = {};
    if (doctor) {
      query.doctor = doctor;
    }
    if (date) {
      query.date = date;
    }

    const slots = await Slot.find(query);
    return res.status(200).json(slots);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.listSlots = async (req, res) => {
  try {
    const { doctorId } = req.params;

    const slots = await Slot.find({ doctor: doctorId });
    return res.status(200).json(slots);
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.addSlot = async (req, res) => {
  try {
    const body = req.body;
    const slot = await Slot.create(body);
    return res.status(201).json({
      message: 'Slot added succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.bookSlot = async (req, res) => {
  try {
    const { slot, user, doctor } = req.body;

    const slotResponse = await Slot.findByIdAndUpdate(slot, { booked: true });
    const appointmentResponse = await Appointment.create({
      user: user,
      slot: slot,
      doctor: doctor,
      date: moment().format('yyyy-MM-DD'),
    });
    return res.status(201).json({
      message: 'Slot booked succesfully',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.cancelSlot = async (req, res) => {
  try {
    const { slotId } = req.params;

    const slotResponse = await Slot.findByIdAndUpdate(slotId, {
      booked: false,
    });
    const appointmentResponse = await Appointment.findOneAndDelete({
      slot: slotId,
    });
    return res.status(201).json({
      message: 'Slot booking cancelled',
      success: true,
      error: false,
    });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};

module.exports.deleteSlot = async (req, res) => {
  try {
    const { slotId } = req.params;
    const response = await Slot.findByIdAndDelete(slotId);
    return res
      .status(200)
      .json({ message: 'Slot deleted', success: true, error: false });
  } catch (e) {
    return res.status(500).json({ message: e.message, error: true });
  }
};
