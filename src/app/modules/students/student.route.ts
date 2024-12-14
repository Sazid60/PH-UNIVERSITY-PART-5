import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

// get all students
router.get('/', StudentController.getAllStudents);
// get single students
router.get('/:id', StudentController.getSingleStudent);
// Update a student
router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentController.updateStudent,
);
// delete student
router.delete('/:id', StudentController.deleteStudent);
//  this delete id will be the generated id  we have  created by server

export const StudentRoutes = router;
