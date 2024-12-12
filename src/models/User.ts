import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter a fullName"],      
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
    },
    mobile: {
      type: Number,
      required: [true, "Please enter a mobile number"],
      minlength: [10, "Mobile number must be at least 10 characters long"],
      maxlength: [10, "Mobile number must be at least 10 characters long"],
    },
    message: {
      type: String,
      required: [true, "Please enter a message"],
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
