let mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  first_name: {type:String, required:[true,"First name is required."]};
  last_name: {type:String, required:[true,"Last name is required."]};
  birthday: {type:Date, required:[true,"Birthday is required."]};
}, {timestamps:true});

mongoose.model('User', UserSchema);
