import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  skills: [String],
  availability: {
    type: String,
    required: true,
  },
  areasOfInterest: [String],
  assignedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
  ],
});

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export { Volunteer };
