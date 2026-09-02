import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  name: { //name of product
    type: String,
    required: true
  },
  productImage: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  stock: {
    type: String,
    deafault: 0
  },
  catogory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Catogory"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamp: true})

export const Product = mongoose.model("Product", productSchema)