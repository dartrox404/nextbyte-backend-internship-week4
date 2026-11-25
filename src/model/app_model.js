const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: [3, "Name cannot be less than 3"],
      maxlength: [15, "Name cannot be less than 15"],
      trim: true,
    },
    age: {
      type: Number,
      min: [0],
      max: [60],
      trim: true,
    },
  },
  {
    timeseries: true,
  },
);

module.exports = mongoose.model("userModel", userSchema);
