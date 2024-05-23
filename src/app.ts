import express, { Application, NextFunction, Request, Response } from "express";
import { StudentRouter } from "./modules/student/student.routes";
import cors from "cors";
import { InstructorRouter } from "./modules/instructor/instructor.routes";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// Application routes
app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/instructors", InstructorRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Route not found handler
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    status: "Route error!",
    message: "Route not found",
  });
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Global error handler:", err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    success: false,
    status: "Global error!",
    message: err.message || "Internal server error!",
  });
});

export default app;
