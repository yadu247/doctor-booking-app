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

router.get('/', listDepartments);
router.post('/', addDepartment);
router.get('/:id', getDepartmentById);
router.patch('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

module.exports = router;
