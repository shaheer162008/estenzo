import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  images: [String],
  helpful: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  }],
  verified: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Ensure one review per user per product
ReviewSchema.index({ product: 1, user: 1 }, { unique: true });

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
