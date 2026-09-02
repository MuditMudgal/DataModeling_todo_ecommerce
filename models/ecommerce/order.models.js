import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderitems: {
      //multiple items  and  quantities
      type: [orderItemsSchema],
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIEVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
