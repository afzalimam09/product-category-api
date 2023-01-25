import { Router } from "express";
import {
    createCategory,
    deleteCategory,
    readAllCategory,
    readCategory,
    updateCategory,
} from "./categoryController.js";

const router = Router();

// All category routes
// /api/v1/category
// /api/v1/category/id
router.route("/").get(readAllCategory).post(createCategory);
router
    .route("/:id")
    .get(readCategory)
    .patch(updateCategory)
    .delete(deleteCategory);

export default router;
