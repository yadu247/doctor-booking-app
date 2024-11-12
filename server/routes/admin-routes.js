const express = require('express');
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  getById,
} = require('../controllers/admin-controller');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getById);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
