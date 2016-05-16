var mongoose = require('mongoose');
var schema = mongoose.Schema;
// Scehma for mongoDB students for use it in the model
var stuentSchema = new schema({
    id: Number,
    name: String,
    grade:Number,
    year:Number
}, {collection: 'studgrades'});

var Student = mongoose.model('Student', stuentSchema);

module.exports = Student;