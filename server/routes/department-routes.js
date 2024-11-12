const express = require('express');
const {
  listDepartments,
  addDepartment,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require('../controllers/department-controller');
const { checkToken } = require('../middlewares/check-token');

const router = express.Router();

router.get('/', checkToken(['ADMIN', 'DOCTOR', 'USER']), listDepartments);
router.post('/', checkToken(['ADMIN']), addDepartment);
router.get('/:id', checkToken(['ADMIN', 'DOCTOR', 'USER']), getDepartmentById);
router.patch('/:id', checkToken(['ADMIN']), updateDepartment);
router.delete('/:id', checkToken(['ADMIN']), deleteDepartment);

module.exports = router;
