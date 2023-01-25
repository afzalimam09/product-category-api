import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import indexRouter from "./components/indexRouter.js";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

// Start express app
const app = express();

// GLOBAL MIDDLEWARES

// Implement CORS
app.use(cors());

// Set Security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Limiter to limit the number of request in an hour
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message:
        "You have reached to the maximum attempt from this IP, Please try after 1 hour!",
});
app.use("/api", limiter);

// Reading data from body
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));

// Use index route
app.use("/api/v1", indexRouter);

//Return 404 if url is not found
app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//Handle Error
app.use(globalErrorHandler);

export default app;
