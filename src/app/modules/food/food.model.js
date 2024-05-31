const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    FoodName: { type: String, required: true },
    FoodImage: { type: String, required: true },
    Donator: {
      DonatorEmail: { type: String, required: true },
      DonatorName: { type: String, required: true },
      donatorImage: { type: String, required: true },
    },
    FoodQuantity: { type: Number, required: true },
    PickupLocation: { type: String, required: true },
    ExpiredDateTime: { type: Date, required: true },
    AdditionalNotes: { type: String },
    status: {
      type: String,
      required: true,
      enum: ["Available", "Unavailable"],
    },
  },
  {
    timestamps: true,
  }
);
const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
