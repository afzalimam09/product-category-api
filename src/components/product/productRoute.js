import { Router } from "express";

import {
    readAllProduct,
    createProduct,
    readProduct,
    updateProduct,
    deleteProduct,
} from "./productController.js";

const router = Router();

// All product routes
// /api/v1/product/
// /api/v1/product/id
router.route("/").get(readAllProduct).post(createProduct);
router
    .route("/:id")
    .get(readProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

export default router;
