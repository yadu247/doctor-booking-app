const express = require('express');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  getById,
} = require('../controllers/admin-controller');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

// ,checkToken(['ADMIN', 'DOCTOR', 'USER']),

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getById);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
