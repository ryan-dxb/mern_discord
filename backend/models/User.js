import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
});

userSchema.methods.toJSON = function () {
  var obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.password;
  return obj;
};

export default mongoose.model("User", userSchema);
