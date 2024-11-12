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

router.get('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), listSlotByDoctorId);
router.get('/:doctorId', checkToken(['ADMIN', 'DOCTOR', 'USER']), listSlots);
router.post('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), addSlot);
router.post('/book', checkToken(['ADMIN', 'DOCTOR', 'USER']), bookSlot);
router.patch('/:slotId', checkToken(['ADMIN', 'DOCTOR', 'USER']), cancelSlot);
router.delete('/:slotId', checkToken(['ADMIN', 'DOCTOR', 'USER']), deleteSlot);

module.exports = router;
