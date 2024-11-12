const express = require('express');
const adminRoutes = require('./admin-routes');
const imageRoutes = require('./image-routes');
const doctorRoutes = require('./doctor-routes');
const userRoutes = require('./user-routes');
const departmentRoutes = require('./department-routes');
const hospitalRoutes = require('./hospital-routes');
const locationRoutes = require('./location-routes');
const slotRoutes = require('./slot-routes');
const appointmentRoutes = require('./appointment-routes');
const prescriptionRoutes = require('./prescription-routes');

const router = express.Router();

router.use('/admin', adminRoutes);
router.use('/image', imageRoutes);
router.use('/doctor', doctorRoutes);
router.use('/user', userRoutes);
router.use('/department', departmentRoutes);
router.use('/hospital', hospitalRoutes);
router.use('/location', locationRoutes);
router.use('/slot', slotRoutes);
router.use('/appointment', appointmentRoutes);
router.use('/prescription', prescriptionRoutes);

module.exports = router;
