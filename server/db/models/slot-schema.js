const { Schema, model } = require('mongoose');

const SlotSchema = Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: 'doctors' },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    booked: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Slot = model('slots', SlotSchema);

module.exports = Slot;
