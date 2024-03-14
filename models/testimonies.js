const mongoose = require("mongoose");

const TestimoniesSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: "string",
      trim: true,
      require: true,
    },
    fullname: {
      type: "string",
      trim: true,
      require: true,
    },
    city: {
      type: "string",
      trim: true,
      require: true,
    },
    description: {
      type: "string",
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonies = mongoose.model("Testimonies", TestimoniesSchema);

module.exports = Testimonies;
