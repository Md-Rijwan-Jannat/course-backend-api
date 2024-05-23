import express from "express";
import { StudentControllers } from "./student.controllers";

const router = express.Router();

router.post("/create-student", StudentControllers.createStudent);
router.get("/", StudentControllers.getAllStudent);
router.get("/single-student", StudentControllers.getSingleStudent);

export const StudentRouter = router;
