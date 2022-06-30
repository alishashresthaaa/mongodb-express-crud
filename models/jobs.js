const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      // assign the job to the user
      type: mongoose.Types.ObjectId,
      // Define which model we are referencing
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  //   To automically provide createdAt and updatedAt properties to documents
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", JobSchema);
