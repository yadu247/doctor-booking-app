const express = require('express');
const { checkToken } = require('../middlewares/check-token');

const {
  listHospitals,
  addHospital,
  getHospitalById,
  updateHospital,
  deleteHospital,
} = require('../controllers/hospital-controller');

const router = express.Router();

router.get('/', listHospitals);
router.post('/', addHospital);
router.get('/:id', getHospitalById);
router.patch('/:id', updateHospital);
router.delete('/:id', deleteHospital);

module.exports = router;
