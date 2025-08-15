import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  salePrice: {
    type: Number,
    default: null,
  },
  images: [{
    url: String,
    alt: String,
  }],
  category: {
    type: String,
    required: true,
    enum: ['men', 'women', 'kids', 'accessories', 'shoes'],
  },
  subcategory: {
    type: String,
    required: true,
  },
  sizes: [{
    size: String,
    stock: {
      type: Number,
      default: 0,
    },
  }],
  colors: [String],
  brand: String,
  material: String,
  careInstructions: String,
  sku: {
    type: String,
    unique: true,
    required: true,
  },
  tags: [String],
  featured: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  weight: Number,
  dimensions: {
    length: Number,
    width: Number,
    height: Number,
  },
}, {
  timestamps: true,
});

// Index for search
ProductSchema.index({
  name: 'text',
  description: 'text',
  brand: 'text',
  tags: 'text',
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
