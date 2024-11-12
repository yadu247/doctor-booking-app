const express = require('express');
const {
  signup,
  login,
  listDoctors,
  getDoctorById,
} = require('../controllers/doctor-controller');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), listDoctors);
router.get('/:id', checkToken(['ADMIN', 'DOCTOR', 'USER']), getDoctorById);

module.exports = router;
