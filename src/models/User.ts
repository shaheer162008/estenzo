import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [
      function(this: { googleId?: string }) {
        return !this.googleId;
      },
      'Password is required when not using Google OAuth'
    ],
  },
  googleId: {
    type: String,
    sparse: true,
  },
  image: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  emailVerified: {
    type: Date,
    default: null,
  },
  phone: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: {
      type: String,
      default: 'UAE',
    },
    zipCode: String,
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false,
  },
  twoFactorSecret: String,
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
