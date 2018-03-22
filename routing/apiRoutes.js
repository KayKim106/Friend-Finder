
var friend = require("../app/data/friends");



module.exports = function(app){



app.get("/api/friends",function(req,res){
	res.json(friend) //displaying all friends
});
app.get("/all",function(req,res){
	res.json(friend);
});

app.post("/api/new", function(req, res) {
console.log("===========req============");
  console.log(req);

  const newFriends = req.body;

  console.log(newFriends);

  friend.push(newFriends);

  res.json(newFriends);
});



}