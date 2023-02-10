import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    slug: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9-]+$/
    },
    pricePerUnit: {
      type: Number,
      required: true,
      min: 0
    },
    stockQtty: {
      type: Number,
      required: true,
      min: 0,
      max: 10000
    },
    category: { type: String }
  },
  {
    versionKey: false
  }
);


const products = mongoose.model("products", productSchema);

export default products;