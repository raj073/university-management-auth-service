import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema
  ),
  AcademicDepartmentController.createDepartment
);

//Get Single Department
router.get('/:id', AcademicDepartmentController.getSingleDepartment);

//Update Department
router.patch('/:id', AcademicDepartmentController.updateDepartment);

//Get All Departments
router.get('/', AcademicDepartmentController.getAllDepartments);

//Delete Department
router.delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoutes = router;
