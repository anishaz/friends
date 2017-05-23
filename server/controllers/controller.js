let mongoose = require('mongoose');

let User = mongoose.model('User');

module.exports = {
  getAll: (req,res) => {
    User.find({}, (err, users)=> {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(users);
      }
    })
  }
  
}
