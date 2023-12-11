import mongoose from "mongoose";

const MedicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dosage: String,
  // Add other fields as needed
});

const Medicine = mongoose.model('Medicine', MedicineSchema);

export default Medicine