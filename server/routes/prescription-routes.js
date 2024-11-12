const express = require('express');
const {
  addPrescription,
  showPrescriptions,
  showPrescriptionsByDoctor,
} = require('../controllers/prescription-controller.js');

const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get('/doctor/:doctorId', showPrescriptionsByDoctor);
router.post('/', addPrescription);
router.get('/:appointmentId', showPrescriptions);

module.exports = router;
