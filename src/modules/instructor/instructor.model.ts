import { Schema, model } from "mongoose";
import { Instructor, InstructorName } from "./instructor.interface";

const InstructorName = new Schema<InstructorName>({
  firstName: String,
  lastName: String,
});

const instructorSchema = new Schema<Instructor>({
  name: {
    type: InstructorName,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    required: true,
  },
});

export const InstructorModel = model<Instructor>(
  "Instructor",
  instructorSchema,
);
