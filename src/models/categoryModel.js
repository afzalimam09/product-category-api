import mongoose from "mongoose";
import db from "../connections/dbConnection.js";

const Schema = mongoose.Schema;

// Category Schema
const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
            minlength: [3, "Category name must have atleast 3 character"],
        },
    },
    { timestamps: true }
);

// Creating model out of the schema
export default db.model("Category", categorySchema);
