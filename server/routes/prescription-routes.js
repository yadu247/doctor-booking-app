const express = require('express');
const {
  addPrescription,
  showPrescriptions,
  showPrescriptionsByDoctor,
} = require('../controllers/prescription-controller.js');

const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get(
  '/doctor/:doctorId',
  checkToken(['ADMIN', 'DOCTOR', 'USER']),
  showPrescriptionsByDoctor
);
router.post('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), addPrescription);
router.get(
  '/:appointmentId',
  checkToken(['ADMIN', 'DOCTOR', 'USER']),
  showPrescriptions
);

module.exports = router;
