import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    fullname: {
      type: String,
      required: [true, "Fullname is required"],
      minLength: [3, "fullname must be at least 4 characters"],
      maxLength: [50, "Fullname must be at most 50 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.Users || model("Users", UserSchema);

export default User;
