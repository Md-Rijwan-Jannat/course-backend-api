import { Instructor } from "./instructor.interface";
import { InstructorModel } from "./instructor.model";

const createInstructorIntoDB = async (instructor: Instructor) => {
  const result = await InstructorModel.create(instructor);
  return result;
};

const getAllInstructorFromDB = async () => {
  const result = await InstructorModel.find();
  return result;
};

const getSingleInstructorFromDB = async (_id: string) => {
  const result = await InstructorModel.findOne({ _id });
  return result;
};

export const InstructorServices = {
  createInstructorIntoDB,
  getAllInstructorFromDB,
  getSingleInstructorFromDB,
};
