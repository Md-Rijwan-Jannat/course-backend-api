import { Schema, model } from "mongoose";
import { Student } from "./student.interface";

const studentSchema = new Schema<Student>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const StudentModel = model<Student>("Student", studentSchema);
