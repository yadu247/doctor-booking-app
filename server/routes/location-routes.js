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

router.get('/', listLocations);
router.post('/', addLocation);
router.get('/:id', getLocationById);
router.patch('/:id', updateLocation);
router.delete('/:id', deleteLocation);

module.exports = router;
