import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // Enroll a user in a course
  app.post("/api/enrollments", (req, res) => {
    const { user, course } = req.body;
    if (!user || !course) {
      res.status(400).json({ message: "User and course are required" });
      return;
    }
    const enrollment = dao.enrollUserInCourse(user, course);
    res.json(enrollment);
  });

  // Unenroll a user from a course
  app.delete("/api/enrollments", (req, res) => {
    const { user, course } = req.body;
    if (!user || !course) {
      res.status(400).json({ message: "User and course are required" });
      return;
    }
    const enrollment = dao.unenrollUserFromCourse(user, course);
    if (enrollment) {
      res.json(enrollment);
    } else {
      res.status(404).json({ message: "Enrollment not found" });
    }
  });
}