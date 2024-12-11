const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    id: { type: ObjectId },
    fullname: { type: String },
}, { timestamps: true });

module.exports = mongoose.models.user || mongoose.model("user", user);
