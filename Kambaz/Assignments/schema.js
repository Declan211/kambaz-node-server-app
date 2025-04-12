import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    availableStart: String,
    dueDate: String,
    points: Number,
    course: { type: String, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
