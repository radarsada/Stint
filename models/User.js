import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Provide name"],
    minlenght: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please Provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please Provide valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please Provide password"],
    minlenght: 6,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "lastname",
  },
  location: {
    type: String,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
export default mongoose.model("User", UserSchema);
