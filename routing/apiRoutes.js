
var friend = require("../app/data/friends");



module.exports = function(app){
app.get("/api/friends",function(req,res){
	res.json(friend) //displaying all friends
});
app.post("/api/friends",function(req,res){
 //display only friends who are matched with friend info
});
}