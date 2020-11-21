const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    type: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    wateredDates: {
      type: [Date],
      required: false,
      unique: false,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Plant", userSchema);
