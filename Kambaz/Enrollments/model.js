import mongoose from "mongoose";
import schema from "./Schema.js"
const model = mongoose.model("EnrollmentModel", schema);
export default model;