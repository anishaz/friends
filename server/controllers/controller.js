let mongoose = require('mongoose');

let Friend = mongoose.model('Friend');

module.exports = {
  getAll: (req,res) => {
    Friend.find({}, (err, friends)=> {
      if(err){
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(friends);
      }
    })
  }

}
