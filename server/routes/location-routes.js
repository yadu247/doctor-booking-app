const express = require('express');
const { checkToken } = require('../middlewares/check-token');

const {
  listLocations,
  addLocation,
  getLocationById,
  updateLocation,
  deleteLocation,
} = require('../controllers/location-controller');

const router = express.Router();

router.get('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), listLocations);
router.post('/', checkToken(['ADMIN']), addLocation);
router.get('/:id', checkToken(['ADMIN', 'DOCTOR', 'USER']), getLocationById);
router.patch('/:id', checkToken(['ADMIN']), updateLocation);
router.delete('/:id', checkToken(['ADMIN']), deleteLocation);

module.exports = router;
