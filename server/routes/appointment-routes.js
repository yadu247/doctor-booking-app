const express = require('express');
const {
  listAppointmentsByUserId,
  listAppointmentsByDoctorId,
} = require('../controllers/appointment-controller');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get(
  '/:userId',
  checkToken(['ADMIN', 'DOCTOR', 'USER']),
  listAppointmentsByUserId
);
router.get(
  '/doctor/:doctorId',
  checkToken(['ADMIN', 'DOCTOR', 'USER']),
  listAppointmentsByDoctorId
);

module.exports = router;
