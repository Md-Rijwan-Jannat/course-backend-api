import { Date } from "mongoose";

export interface InstructorName {
  firstName: string;
  lastName: string;
}

export interface Instructor {
  name: InstructorName;
  age: number;
  gender: "Male" | "Female";
  email: string;
  address: string;
  contactNo: string;
  dateOfBirth: string;
  joinDate: Date;
}
