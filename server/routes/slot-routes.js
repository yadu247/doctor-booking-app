const express = require('express');
const {
  listSlotByDoctorId,
  addSlot,
  bookSlot,
  cancelSlot,
  listSlots,
  deleteSlot,
} = require('../controllers/slot-controller');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get('/', listSlotByDoctorId);
router.get('/:doctorId', listSlots);
router.post('/', addSlot);
router.post('/book', bookSlot);
router.patch('/:slotId', cancelSlot);
router.delete('/:slotId', deleteSlot);

module.exports = router;
