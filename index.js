import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import session from "express-session";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import "dotenv/config";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from './Kambaz/Enrollments/routes.js';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kambaz",
    resave: false,
    saveUninitialized: false,
  };
  
  if (process.env.NODE_ENV === "development") {
    // In development, do not require HTTPS, and omit the domain.
    sessionOptions.cookie = { secure: false, sameSite: "lax" };
  } else {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
  }
  
  
app.use(express.json());
app.use(session(sessionOptions));
UserRoutes(app);
CourseRoutes(app)
ModuleRoutes(app)
AssignmentRoutes(app)
EnrollmentRoutes(app)
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000)