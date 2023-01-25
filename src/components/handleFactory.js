import APIFeatures from "../utils/apiFeatures.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

// Factory function to delete a document
export const deleteOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        // Send error if no documents found
        if (!doc) {
            return next(new AppError("No document found with that ID", 404));
        }

        // Send Response
        res.status(204).json({
            status: "success",
            data: null,
        });
    });

// A factory function to update a document
export const updateOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        // Send error if no documents found
        if (!doc) {
            return next(new AppError("No document found with that ID", 404));
        }

        // Send Response
        res.status(200).json({
            status: "success",
            data: doc,
        });
    });

// Factory function to create a document
export const createOne = (Model) =>
    catchAsync(async (req, res, next) => {
        const doc = await Model.create(req.body);

        // Send Response
        res.status(201).json({
            status: "success",
            data: doc,
        });
    });

// Factory function to get a single document
export const getOne = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        let query = Model.findById(req.params.id);
        if (popOptions) query = query.populate(popOptions);
        const doc = await query;

        // Send error if no documents found
        if (!doc) {
            return next(new AppError("No document found with that ID", 404));
        }

        // Send Response
        res.status(200).json({
            status: "success",
            data: doc,
        });
    });

// Factory function to get all the documents
export const getAll = (Model, popOptions) =>
    catchAsync(async (req, res, next) => {
        // Apply all the api features
        const features = new APIFeatures(Model.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate()
            .populate(popOptions);

        const doc = await features.query;

        // SEND RESPONSE
        res.status(200).json({
            status: "success",
            results: doc.length,
            data: doc,
        });
    });
