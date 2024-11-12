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

router.get('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), listHospitals);
router.post('/', checkToken(['ADMIN']), addHospital);
router.get('/:id', checkToken(['ADMIN', 'DOCTOR', 'USER']), getHospitalById);
router.patch('/:id', checkToken(['ADMIN']), updateHospital);
router.delete('/:id', checkToken(['ADMIN']), deleteHospital);

module.exports = router;
