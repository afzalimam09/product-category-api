import express from "express";

import productRoute from "./product/productRoute.js";
import categoryRoute from "./category/categoryRoute.js";

const router = express.Router();

// Use category route and product route
router.use("/category", categoryRoute);
router.use("/product", productRoute);

export default router;
