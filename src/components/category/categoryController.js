import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "../handleFactory.js";
import Category from "../../models/categoryModel.js";

// Call factory function and Pass the Model
export const readAllCategory = getAll(Category);
export const createCategory = createOne(Category);
export const readCategory = getOne(Category);
export const updateCategory = updateOne(Category);
export const deleteCategory = deleteOne(Category);
