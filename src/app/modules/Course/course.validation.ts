import { z } from 'zod';

const preRequisiteCourseValidation = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});
const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourses: z.array(preRequisiteCourseValidation).optional(),
  }),
});

export const CourseValidations = {
  createCourseValidationSchema,
};
