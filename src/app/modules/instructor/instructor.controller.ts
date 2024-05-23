import { NextFunction, Request, Response } from "express";
import { InstructorServices } from "./instructor.services";

const createInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { instructor: instructorData } = await req.body;
    const result =
      await InstructorServices.createInstructorIntoDB(instructorData);
    res.status(202).json({
      success: true,
      message: "Instructor is created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await InstructorServices.getAllInstructorFromDB();
    res.status(202).json({
      success: true,
      message: "Instructor are retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleInstructor = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { _id } = req.query;
    const result = await InstructorServices.getSingleInstructorFromDB(
      _id as string,
    );
    res.status(202).json({
      success: true,
      message: "Instructor is retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const InstructorControllers = {
  createInstructor,
  getAllInstructor,
  getSingleInstructor,
};
