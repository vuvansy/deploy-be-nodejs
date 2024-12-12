const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const customer = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    description: { type: String },
    image: { type: String },
}, { timestamps: true });

module.exports = mongoose.models.customer || mongoose.model("customer", customer);

