import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "../handleFactory.js";
import Product from "../../models/productModel.js";

// Call factory function and Pass the Model
export const readAllProduct = getAll(Product, "categoryId");
export const createProduct = createOne(Product);
export const readProduct = getOne(Product, "categoryId");
export const updateProduct = updateOne(Product);
export const deleteProduct = deleteOne(Product);
