const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isClerk: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
