import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: String,
    color: String,
    price: {
      type: Number,
      required: true,
    },
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    enum: ['stripe', 'cash_on_delivery'],
    default: 'stripe',
  },
  stripePaymentId: String,
  shippingAddress: {
    name: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
    phone: String,
  },
  billingAddress: {
    name: String,
    street: String,
    city: String,
    state: String,
    country: String,
    zipCode: String,
  },
  trackingNumber: String,
  estimatedDelivery: Date,
  notes: String,
}, {
  timestamps: true,
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
