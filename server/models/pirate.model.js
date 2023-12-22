
const mongoose = require("mongoose");

const pirateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  position: {
    type: String,
    required: [true, "Position is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "Image is required"],
  },
  treasure: {
    type: Number,
    required: [true, "Treasure is required"],
  },
  phrase: {
    type: String,
    required: [true, "Pirate catch phrase is required"],
  },
  pegLeg: {
    type: Boolean,
    required: [true, "Peg Leg is required"],
    default: true, 
  },
  eyePatch: {
    type: Boolean,
    required: [true, "Eye Patch is required"],
    default: true, 
  },
  hookHand: {
    type: Boolean,
    required: [true, "Hook Hand is required"],
    default: true, 
  },
}, { timestamps: true });

module.exports = mongoose.model('Pirate', pirateSchema);
