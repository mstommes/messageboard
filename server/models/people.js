var mongoose = require('mongoose');

var PeopleSchema = new mongoose.Schema({
    name : String,
    message : String
});

module.exports = mongoose.model("people", PeopleSchema);