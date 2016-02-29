/*
* More details here http://mongoosejs.com/docs/queries.html
*/

//require mongoose model defines in model/blog.js (see Files)
var BlogPost = require("./model/blog");

//Find one blog post by this
BlogPost.findOne({author: "Yash Kumar"}, function(err, doc) {
	if (err) {
		return err
	}
	else {
		console.log(doc);
	}
});
