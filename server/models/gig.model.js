import mongoose from "mongoose";
const { Schema } = mongoose;

const gigSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    totalStars: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    Price: {
      type: Number,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    shortTitle: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      required: false,
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Gig", gigSchema);
