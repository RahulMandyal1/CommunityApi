const mongoose = require("mongoose");
//establish our application connection with the database
module.exports.connect = function () {
  mongoose.connect("mongodb+srv://communityapi:communityapialtcampus@cluster0.v6x9g.mongodb.net/?retryWrites=true&w=majority", (err) => {
    console.log(err ? err : "Connection is made sucessfully");
  });
};
