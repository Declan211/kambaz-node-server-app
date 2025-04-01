import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollment = enrollments.find(
    (e) => e.user === userId && e.course === courseId
  );
  if (enrollment) {
    Database.enrollments = enrollments.filter((e) => e._id !== enrollment._id);
  }
}
