const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var usersSchema = new Schema({
    user_name: {type: String, required: false},
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    emailId: {type: String, required: true},
    password: {type: String, required: false},
    phoneNo: {type: String, required: false},
    dateOfBirth: {type: String, required: false},
    age: {type: int, required: false},
    qualification: {type: String, required: false},
    governmentId: {type: String, required: false},
    githubLink: {type: String, required: false},
    yearsOfExperience: {type: String, required: false},
    techStack: {type: [String] , required: false},
    image: {type: String, required: false},
    city: {type: String, required: false},
    country: {type: String, required: false},
    
    
},
{
    versionKey: false
});

const userModel = mongoose.model('user', usersSchema);
module.exports = userModel;