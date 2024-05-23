import { Request, Response, NextFunction } from "express";
import { StudentServices } from "./student.services";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { student: studentData } = await req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(202).json({
      success: true,
      message: "Student are retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.query;
    const result = await StudentServices.getSingleStudentFromDB(_id as string);
    res.status(202).json({
      success: true,
      message: "Student is retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
