const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomId: { type: String, required: true, unique: true,},

    code: {  type: String,default: "", },

    language: { type: String, default: "javascript" },

    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    lastUpdated: { type: Date, default: Date.now },

} , 
   { timestamps: true }
);
module.exports = mongoose.model("Room",roomSchema) ;