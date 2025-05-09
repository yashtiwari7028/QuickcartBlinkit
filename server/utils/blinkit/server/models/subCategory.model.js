import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      default: "",
    },
    image: {
      type: "string",
      default: "",
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "category",
      },
    ],
  },
  { timestamps: true }
);

const SubCategoryModel = mongoose.model("subCategory", subCategorySchema);

export default SubCategoryModel;
