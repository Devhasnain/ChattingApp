const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: {
        type: String,
        enum: ["text", "audio", "image", "video"],
      },
      content: {
        type: mongoose.Schema.Types.Mixed,
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Conversation = mongoose.model("conversation", conversationSchema);

module.exports = Conversation;
