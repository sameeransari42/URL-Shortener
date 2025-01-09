const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const URL = mongoose.model("short", urlSchema);

module.exports = URL;